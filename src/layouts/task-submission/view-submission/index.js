import React, { useState } from 'react';
import { Modal, Button } from '@mui/material';
import { Card, CardContent, Grid } from '@mui/material';
import MDBox from 'components/MDBox';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import Header from 'layouts/store-management/Header';
import { useParams } from 'react-router-dom';
import MDTypography from 'components/MDTypography';
import MDButton from "components/MDButton";
import homeDecor1 from 'assets/images/home-decor-1.jpg';
import homeDecor2 from 'assets/images/home-decor-2.jpg';
import homeDecor3 from 'assets/images/home-decor-3.jpg';
import homeDecor4 from "assets/images/home-decor-4.jpeg";

import axios from 'axios';
import { useEffect } from "react";

const ImageModal = () => {
  const [open, setOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedSubmissionIndex, setSelectedSubmissionIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const [submissions, setSubmissions] = useState([]);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("user");
  let { task_id } = useParams();
  const userGroup = localStorage.getItem("user_group");
  const apiBaseUrl = process.env.REACT_APP_STORE_BASE_URL;
  const imageData = [
    {
      imageUrl: homeDecor1,
      comment: 'This is the first image.',
    },
    {
      imageUrl: homeDecor2,
      comment: 'Comment for the second image',
    },
    {
      imageUrl: homeDecor3,
      comment: 'Comment for the third image',
    },
    {
      imageUrl: homeDecor4,
      comment: 'Comment for the third image',
    },
    {
      imageUrl: homeDecor2,
      comment: 'Comment for the third image',
    },
    // Add more image data objects as needed
  ];

  const handleApprove = (submissionIndex) => {
    setShowModal(true);
    setButtonDisabled(true); // Disable buttons after clicking Approve or Decline
    setSelectedSubmission(submissionIndex);

  };
  const close = () => {
    setShowModal(false);
    setButtonDisabled(false); // Disable buttons after clicking Approve or Decline
    setSelectedSubmission(null);

  };
  const handleDisapprove = (submissionIndex) => {
    setShowModal(true);
    // Disable buttons after clicking Approve or Decline
    setSelectedSubmission(submissionIndex);

  };
  const handleSubmit = async (status) => {
    try {
      console.log(submissions[selectedSubmission]);
      console.log(feedback);
      // Make an API call to submit the status and feedback
      await axios.put(apiBaseUrl+`/submission/` + submissions[selectedSubmission].id + '/', {
        status: status,
        feedback: feedback,
      });

      // Handle success, e.g., close modal, show success message, etc.
      setShowModal(false);
      setButtonDisabled(false);
      window.location.reload();
      // Enable buttons after submitting feedback
      alert('Status updated successfully!');
    } catch (error) {
      // Handle error
      console.error('Error:', error);
      // Show error message or handle it as needed
    }
  };

  const fetchSubmissions = async () => {

    try {

      const response = await axios.get(apiBaseUrl+`/task_submissions/${task_id}`, {
        headers: {
          Authorization: `Token ${token}`,  // Replace with your authentication token
        },
      });
      // Make an API call to fetch notifications

      console.log(response)

      // Check the response and update the state with the fetched notifications
      if (response && response.status === 200) {

        setSubmissions(response.data)
      } else {
        console.error('Error:', response.data);
        // Handle error
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };
  useEffect(() => {
    // Fetch notifications when the component mounts
    fetchSubmissions();
  }, []);


  const handleOpen = (submissionIndex, imageIndex) => {
    setSelectedImageIndex(imageIndex);
    setSelectedSubmissionIndex(submissionIndex);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImageIndex(null);
    setSelectedSubmissionIndex(null);
  };

  const handleDownload = (imageUrl) => {
    // Implement download logic here
    window.open(imageUrl, '_blank');
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % submissions[selectedSubmissionIndex].task_submissions.length);
  };

  const handlePrevious = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + submissions[selectedSubmissionIndex].task_submissions.length - 1) % submissions[selectedSubmissionIndex].task_submissions.length);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} sx={{ width: '100%' }} />
      <Header>
        <div>

          <div>
            {submissions.length === 0 && (
              <MDBox mb={6} ml={2} sx={{ width: '100%' }} >
                <MDTypography variant="h3" color="dark" fontWeight="large">
                  沒有提交 !
                </MDTypography>
              </MDBox>
            )}
            {submissions.map((submission, submissionIndex) => (
              <div >
                <Card style={{ marginBottom: '30px' }}>
                  <CardContent>
                    <Grid item xs={12} key={submissionIndex}>
                      <div key={submissionIndex} className='m-4'>
                        <MDTypography variant="h6" gutterBottom style={{ marginBottom: '40px' }}>
                          任務提交: {submissionIndex + 1}
                        </MDTypography>
                       
                        <MDTypography component="a" href="#" variant="caption" color="info" fontWeight="medium">
                          {/* View Submission */}
                          Feedback
                        </MDTypography>
                        <MDTypography variant="h6" gutterBottom style={{ marginBottom: '40px' }}>
                          {submission.submission_feedback}
                        </MDTypography>
                        {submission.status === 'APPROVED' && ( // Check if the submission is approved
                          <div
                            style={{
                              position: 'absolute',
                              top: '25px',
                              right: '30px',
                              padding: '5px',
                              borderRadius: '8px',
                              fontWeight: 'bold',
                              color: 'green',
                              fontSize: '14px',
                            }}
                          >
                            ✓ 提交已批准
                          </div>
                        )}

                        {submission.status === 'DECLINED' && ( // Check if the submission is declined
                          <div
                            style={{
                              position: 'absolute',
                              top: '25px',
                              right: '30px',
                              padding: '5px',
                              borderRadius: '8px',
                              fontWeight: 'bold',
                              color: 'red',
                              fontSize: '14px',
                            }}
                          >
                            X 拒絕 !
                            {/* Decilned */}
                          </div>
                        )}
                        <div className='flex flex-row flex-wrap'>
                          {submission.task_submissions.map((taskSubmission, taskIndex) => (
                            <div key={taskIndex} className='m-2'>
                              <div style={{ position: 'relative', display: 'inline-block' }}>
                                <img
                                  src={apiBaseUrl+`/images/${taskSubmission.image}`}
                                  alt={`Image ${taskIndex}`}
                                  onClick={() => handleOpen(submissionIndex, taskIndex)}
                                  style={{ width: '100%', height: 'auto', maxHeight: '15vh' }}
                                />
                                <div
                                  style={{
                                    position: 'absolute',
                                    top: '5%',
                                    left: '5%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '20px',
                                    height: '20px',
                                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                    color: 'white',
                                    borderRadius: '50%',
                                    fontWeight: 'bold',
                                    fontSize: '12px',
                                  }}
                                >
                                  {taskIndex + 1}
                                </div>
                              </div>
                              <p>{taskSubmission.comment}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Grid>
                  </CardContent>
                  <div style={{ margin: '30px' }}>
                    {userGroup !== "WORKER" && (
                      <div style={{ display: 'flex', justifyContent: 'end', gap: '10px' }}>

                        <MDButton variant="gradient" color="success" type="submit" disabled={submission.status === 'APPROVED' || buttonDisabled}
                          onClick={() => handleApprove(submissionIndex)}>
                          核准
                        </MDButton>
                        <MDButton variant="gradient" color="error" type="submit" disabled={submission.status === 'DECLINED' || buttonDisabled}
                          onClick={() => handleDisapprove(submissionIndex)}>
                          拒绝
                        </MDButton>
                      </div>
                    )}
                    <div>

                    </div>
                  </div>
                </Card>

              </div>
            ))}


          </div>




        </div>

        <Modal open={showModal} >
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: 50,
            outline: 'none',
            borderRadius: 38,
            display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center',

          }}>
            <textarea style={{
              width: '100%', // Adjust width as needed
              height: '100px', // Adjust height as needed
              marginBottom: '20px', // Add margin as needed
              resize: 'none', // Prevent textarea resizing
              padding: '10px', // Add padding as needed

            }}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="給予回饋 ..."
            />
            <MDButton type="submit" onClick={() => handleSubmit('APPROVED')}>核准</MDButton>
            <MDButton type="submit" onClick={() => handleSubmit('DECLINED')}>拒绝</MDButton>
            <MDButton onClick={() => close()}>取消</MDButton>
          </div>
        </Modal>


        <Modal open={open} onClose={handleClose}>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'white',
              padding: 20,
              outline: 'none',
              borderRadius: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {selectedImageIndex !== null && (
              <>
                <div style={{ position: 'relative' }}>
                  <img
                    src={apiBaseUrl+`/images/${submissions[selectedSubmissionIndex].task_submissions[selectedImageIndex].image}`}
                    alt={`Selected Image`}
                    style={{ maxWidth: '80vw', maxHeight: '80vh', objectFit: 'contain' }}
                  />

                  <MDButton variant="gradient" color="primary" type="submit" onClick={() => handleDownload(apiBaseUrl+'/images/' + submissions[selectedSubmissionIndex].task_submissions[selectedImageIndex].image)}
                    style={{ position: 'absolute', top: 10, right: 10 }}>
                    下載
                  </MDButton>
                </div>
                <p>{submissions[selectedSubmissionIndex].task_submissions[selectedImageIndex].comment}</p>
                <div style={{ display: 'flex', justifyContent: 'end', gap: '10px', margin: 10 }}>

                  <MDButton variant="gradient" color="light" type="submit" onClick={handlePrevious} disabled={submissions[selectedSubmissionIndex].task_submissions.length <= 1}>
                    上一页
                  </MDButton>
                  <MDButton variant="gradient" color="info" type="submit" onClick={handleNext} disabled={submissions[selectedSubmissionIndex].task_submissions.length <= 1}>
                    下一页
                  </MDButton>

                </div>
              </>
            )}
          </div>


        </Modal>
      </Header>
    </DashboardLayout>
  );
};

export default ImageModal;
