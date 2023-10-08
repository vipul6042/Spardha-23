import React, { useState } from 'react';
import './Admin.css'
// import { isMobile } from 'react-device-detect';
// import AdminSideBar from '../AdminSideBar/AdminSideBar'
import './AdminSideBar.css'
import Navbar from '../Navbar/Navbar';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome
// } from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from 'reactstrap';
// import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './AdminSideBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaTasks } from 'react-icons/fa';
// import { FaUserAlt } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { HiUsers } from "react-icons/hi";
import { MdPostAdd } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import { IoMdBasketball } from "react-icons/io";
import AllUsers from '../Pages/AllUsers';
import SportsRegistrations from '../Pages/SportsRegistrations';
import DocumentVerification from '../Pages/DocumentVerification';
import AllGames from '../Pages/AllGames';
import Fixtures from '../Pages/fitures';

// import { FaSignOutAlt } from 'react-icons/fa';


const Admin = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  const [page, setPage] = useState('alluser');

  // useEffect(() => {
  //     // console.log('mobile=', isMobile);
  //     if (isMobile) {
  //         setSidebarOpen(false);
  //     }
  // }, []);
  // const [mobile, setMobile] = useState(false);

  //   useEffect(() => {
  //     // console.log('mobile=', isMobile);
  //     if (isMobile) {
  //       setMobile(true);
  //     }
  //   }, []);

  //   const handleClick = () => {
  //     // console.log('handle click');
  //     if (mobile) {
  //       toggle();
  //     }
  //   };
  //   const handleClick2 = () => {
  //     // console.log('handle click');
  //     if (mobile) {
  //       toggle();
  //     }

  //     localStorage.removeItem('token');
  //     // window.location.href = '/';
  //   };
  return (<>
    <div className='sidebar' style={{ marginLeft: sidebarIsOpen ? '0px' : '-250px' }}>

      <div

        id="navigation"
      >
        <div className="sidebar-header">
          <span color="info" style={{ color: '#fff' }}>
            &times;
          </span>
          {/* <h3>Bootstrap Sidebar</h3> */}
          <div className="logo_db">
            <Link to="/">
              <img
                src="/images/spardha-logo-white.png"
                alt="spardha-logo"
                className="hidden-sm spardha-logo"
              />
              {/* <img src="/images/logo/spardha-small-white.png" alt="spardha-logo" className="visible-xs visible-sm circle-logo"/> */}
            </Link>
          </div>
        </div>
        <div className="side-menu">
          <Nav vertical className="list-unstyled pb-3 navi">
            {/* <p>Dummy Heading</p> */}
            {/* <SubMenu title="Home" icon={faHome} items={submenus[0]} /> */}

            {/* <NavItem className="item_nav">
            <NavLink
              tag={Link}
              to={'/'}
              onClick={() => {
               setPage() ;
              }}
            >
              {/* <FontAwesomeIcon icon={faHome} className="mr-2 icon_bar" /> *}
              <FaHome className="mr-2 icon_bar" />
              DashBoard
            </NavLink>
          </NavItem> */}
            <NavItem className="item_nav">
              <NavLink
                tag={Link}
                //   to={"/allUsers"}
                onClick={() => {
                  setPage('allUser');
                }}
              >
                {/* <FontAwesomeIcon icon={faBriefcase} className="mr-2 icon_bar" /> */}
                {/* <FaTasks className="mr-2 icon_bar" /> */}
                <HiUsers />

                All Users
              </NavLink>
            </NavItem>
            {/* <SubMenu title="Pages" icon={faCopy} items={submenus[1]} /> */}
            <NavItem className="item_nav">
              <NavLink
                tag={Link}
                //   to={'/sportsRegistrations'}
                onClick={() => {
                  setPage('sportRegistration');
                }}
              >
                {/* <FontAwesomeIcon icon={faImage} className="mr-2 icon_bar" /> */}
                <FaEdit />
                Sports Registration
              </NavLink>
            </NavItem>
            <NavItem className="item_nav">
              <NavLink
                tag={Link}
                //   to={'/documentVerification'}
                onClick={() => {
                  setPage('docVerification');
                }}
              >
                {/* <FontAwesomeIcon icon={faImage} className="mr-2 icon_bar" /> */}
                {/* <FaSignOutAlt className="mr-2 icon_bar" /> */}
                <CgFileDocument />
                Doc Verification
              </NavLink>
            </NavItem>
            <NavItem className="item_nav">
              <NavLink
                tag={Link}
                //   to={'/allGames'}
                onClick={() => {
                  setPage('allGames');
                }}
              >
                {/* <FontAwesomeIcon icon={faImage} className="mr-2 icon_bar" /> */}
                <IoMdBasketball />
                All Games
              </NavLink>
            </NavItem>
            <NavItem className="item_nav">
              <NavLink
                tag={Link}
                //   to={'/allGames'}
                onClick={() => {
                  setPage('fixtures');
                }}
              >
                {/* <FontAwesomeIcon icon={faImage} className="mr-2 icon_bar" /> */}
                <MdPostAdd />
                Fixtures
              </NavLink>
            </NavItem>
            {/* <NavItem>
          <NavLink tag={Link} to={"/faq"}>
            <FontAwesomeIcon icon={faQuestion} className="mr-2" />
            FAQ
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/contact"}>
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Contact
          </NavLink>
        </NavItem> */}
          </Nav>
        </div>
      </div>
    </div>
    <div class="course1">
      <div class='topbar'>
        <button class='oc' onClick={toggleSidebar}>
          {sidebarIsOpen ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.7722 11H6.11979L7.37496 9.71C7.55677 9.5217 7.65891 9.2663 7.65891 9C7.65891 8.7337 7.55677 8.47831 7.37496 8.29C7.19315 8.1017 6.94656 7.99591 6.68944 7.99591C6.43233 7.99591 6.18574 8.1017 6.00393 8.29L3.10738 11.29C3.01688 11.383 2.94505 11.4936 2.89603 11.6154C2.84701 11.7373 2.82178 11.868 2.82178 12C2.82178 12.132 2.84701 12.2627 2.89603 12.3846C2.94505 12.5064 3.01688 12.617 3.10738 12.71L6.00393 15.71C6.09368 15.8037 6.20047 15.8781 6.31813 15.9289C6.43579 15.9797 6.56199 16.0058 6.68944 16.0058C6.8169 16.0058 6.9431 15.9797 7.06076 15.9289C7.17842 15.8781 7.2852 15.8037 7.37496 15.71C7.46546 15.617 7.53729 15.5064 7.58631 15.3846C7.63532 15.2627 7.66056 15.132 7.66056 15C7.66056 14.868 7.63532 14.7373 7.58631 14.6154C7.53729 14.4936 7.46546 14.383 7.37496 14.29L6.11979 13H19.7722C20.0117 12.9879 20.2383 12.8839 20.4078 12.7083C20.5773 12.5327 20.6777 12.298 20.6894 12.05V12C20.6898 11.7432 20.5947 11.4962 20.4239 11.31C20.2532 11.1238 20.0198 11.0128 19.7722 11Z" fill="white" />
            <path d="M19.7721 18H4.2273C3.72072 18 3.31006 18.4253 3.31006 18.95V19.05C3.31006 19.5747 3.72072 20 4.2273 20H19.7721C20.2787 20 20.6894 19.5747 20.6894 19.05V18.95C20.6894 18.4253 20.2787 18 19.7721 18Z" fill="white" />
            <path d="M19.7721 4H4.2273C3.72072 4 3.31006 4.42533 3.31006 4.95V5.05C3.31006 5.57467 3.72072 6 4.2273 6H19.7721C20.2787 6 20.6894 5.57467 20.6894 5.05V4.95C20.6894 4.42533 20.2787 4 19.7721 4Z" fill="white" />
          </svg>
            : '->'}
        </button>
        <div class="right">
          <div><Navbar /></div>
          <div class='admininfo'>
            <div class="spardha_admin_text"><div className='text1'>Spardha</div><div className='text2'>Admin</div> </div>
            <div class="logo"></div>
          </div>
        </div>
      </div>
      <section class="course">
        {/* <div className='admin_dash_margin'>
                        <h1>Admin Dashboard</h1>
                        <h2>Access a comprehensive overview of all user data at a glance on this dedicated admin page.</h2>
                    </div>
                    <div class="box_container">
                        <div class="course-col">
                            <div className='icon_n_text'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="17" viewBox="0 0 25 17" fill="none">
                                    <path d="M17.0454 6.69643C18.9204 6.69643 20.4546 5.18962 20.4546 3.34821C20.4546 1.50686 18.9204 0 17.0454 0C15.1705 0 13.6364 1.50686 13.6364 3.34821C13.6364 5.18962 15.1705 6.69643 17.0454 6.69643ZM7.95458 6.69643C9.82952 6.69643 11.3636 5.18962 11.3636 3.34821C11.3636 1.50686 9.82952 0 7.95458 0C6.07963 0 4.54542 1.50686 4.54542 3.34821C4.54542 5.18962 6.07963 6.69643 7.95458 6.69643ZM7.95458 9.15179C5.28393 9.15179 0 10.4352 0 13.058V16.0714H16.0714V13.058C16.0714 10.4352 10.6251 9.15179 7.95458 9.15179ZM17.0454 9.76579C16.7047 9.76579 16.4693 9.76579 16.0714 9.82143C17.3787 10.7702 17.8571 11.3839 17.8571 13.058V16.0714H25V13.058C25 10.4352 19.7161 9.76579 17.0454 9.76579Z" fill="#4D44B5" />
                                </svg>
                                <h3>All Users</h3>
                            </div>
                            <p>Registered users and their details</p>
                            <a class="hero-btn" href="/allUsers">View</a>
                        </div>


                        <div class="course-col">
                            <div className='icon_n_text'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M16.9086 0.285498C16.5279 -0.0951661 15.9215 -0.0951661 15.5409 0.285498L8.19248 7.63386C8.07636 7.74356 7.99894 7.88548 7.94732 8.04031L6.74732 12.0468C6.64408 12.3887 6.74086 12.7564 6.99248 13.0081C7.17311 13.1952 7.42473 13.2919 7.67635 13.2919C7.76665 13.2919 7.86344 13.279 7.95377 13.2532L11.9602 12.0532C12.1151 12.0016 12.257 11.9242 12.3666 11.8081L19.7151 4.45967C19.8957 4.27905 19.9989 4.03389 19.9989 3.77581C19.9989 3.51777 19.8957 3.2726 19.7151 3.09194L16.9086 0.285498Z" fill="#5041BC" />
                                    <path d="M19.0323 9.03378C18.4977 9.03378 18.0645 9.46725 18.0645 10.0015V16.4531C18.0645 17.3428 17.3409 18.066 16.4516 18.066H3.54839C2.65908 18.066 1.93548 17.3428 1.93548 16.4531V3.54991C1.93548 2.66029 2.65908 1.93701 3.54839 1.93701H10C10.5346 1.93701 10.9677 1.50354 10.9677 0.969268C10.9677 0.434997 10.5346 0.00152588 10 0.00152588H3.54839C1.5918 0.00152588 0 1.59364 0 3.54991V16.4531C0 18.4094 1.5918 20.0015 3.54839 20.0015H16.4516C18.4082 20.0015 20 18.4094 20 16.4531V10.0015C20 9.46725 19.5668 9.03378 19.0323 9.03378Z" fill="#5041BC" />
                                </svg>
                                <h3>Sports Registration</h3>
                            </div>
                            <p>Sports registrations and their details.</p>
                            <a class="hero-btn" href="/sportsRegistrations">View</a>
                        </div>

                        <div class="course-col">
                            <div className='icon_n_text'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="23" viewBox="0 0 17 23" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0529 4.24971H13.2819C12.9915 4.24971 12.7533 3.96911 12.7533 3.63098V2.03678C12.7533 0.912613 11.8776 0 10.8018 0H1.94713C0.875723 0 0 0.912613 0 2.03678V20.6254C0 21.7451 0.875723 22.6622 1.94713 22.6622H15.0529C16.1287 22.6622 17 21.7451 17 20.6254V6.28649C17 5.16233 16.1287 4.24971 15.0529 4.24971Z" fill="#5041BC" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5868 20.6256C15.5868 20.9672 15.3478 21.2443 15.0538 21.2443H1.94805C1.65762 21.2443 1.41943 20.9672 1.41943 20.6256V2.03695C1.41943 1.69439 1.65762 1.41821 1.94805 1.41821H10.8027C11.0967 1.41821 11.3357 1.69439 11.3357 2.03695V3.63114C11.3357 4.75089 12.207 5.6635 13.2829 5.6635H15.0538C15.3478 5.6635 15.5868 5.9441 15.5868 6.28666V20.6256Z" fill="#5041BC" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.54226 7.08132H9.21188C9.60237 7.08132 9.91671 6.76354 9.91671 6.37229C9.91671 5.98193 9.60237 5.66327 9.21188 5.66327H3.54226C3.15177 5.66327 2.83301 5.98193 2.83301 6.37229C2.83301 6.76354 3.15177 7.08132 3.54226 7.08132Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4586 9.44177H3.54226C3.15177 9.44177 2.83301 9.75601 2.83301 10.1508C2.83301 10.5412 3.15177 10.8554 3.54226 10.8554H13.4586C13.8535 10.8554 14.1678 10.5412 14.1678 10.1508C14.1678 9.75601 13.8535 9.44177 13.4586 9.44177Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4586 13.2159H3.54226C3.15177 13.2159 2.83301 13.5337 2.83301 13.925C2.83301 14.3153 3.15177 14.634 3.54226 14.634H13.4586C13.8535 14.634 14.1678 14.3153 14.1678 13.925C14.1678 13.5337 13.8535 13.2159 13.4586 13.2159Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4586 16.9946H3.54226C3.15177 16.9946 2.83301 17.3132 2.83301 17.7036C2.83301 18.094 3.15177 18.4126 3.54226 18.4126H13.4586C13.8535 18.4126 14.1678 18.094 14.1678 17.7036C14.1678 17.3132 13.8535 16.9946 13.4586 16.9946Z" fill="white" />
                                </svg>
                                <h3>Doc Verification</h3>
                            </div>
                            <p>Document verifications and their details</p>
                            <a class="hero-btn" href="/documentVerification">View</a>
                        </div>
                        <div class="course-col">
                            <div className='icon_n_text'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M14.5 8.09448H18.0005C17.8602 6.70611 17.3985 5.3695 16.6518 4.19061C15.4842 5.18735 14.7193 6.57502 14.5 8.09448Z" fill="#5041BC" />
                                    <path d="M14.5 9.9035C14.7195 11.4231 15.4843 12.811 16.6518 13.8083C17.3984 12.629 17.8601 11.2921 18.0005 9.9035H14.5Z" fill="#5041BC" />
                                    <path d="M9.90332 8.09446H12.6702C12.9031 6.0135 13.9303 4.10275 15.5375 2.76056C14.0509 1.19493 12.0515 0.215281 9.90332 0V8.09446Z" fill="#5041BC" />
                                    <path d="M5.32823 8.09446H8.09513V0C5.94693 0.215281 3.94751 1.19493 2.46094 2.76056C4.06779 4.10305 5.09485 6.01364 5.32823 8.09446Z" fill="#5041BC" />
                                    <path d="M0 9.9035C0.140367 11.2921 0.602096 12.629 1.34862 13.8083C2.51612 12.811 3.28096 11.4231 3.50045 9.9035H0Z" fill="#5041BC" />
                                    <path d="M1.34862 4.19061C0.601987 5.3695 0.140244 6.70611 0 8.09448H3.50045C3.28114 6.57502 2.51625 5.18735 1.34862 4.19061Z" fill="#5041BC" />
                                    <path d="M12.6702 9.9035H9.90332V17.9989C12.0513 17.7828 14.0505 16.8033 15.5375 15.2383C13.9307 13.8954 12.9037 11.9845 12.6702 9.9035Z" fill="#5041BC" />
                                    <path d="M8.09513 9.9035H5.32823C5.0953 11.9845 4.06816 13.8952 2.46094 15.2374C3.94751 16.803 5.94693 17.7827 8.09513 17.998V9.9035Z" fill="#5041BC" />
                                </svg>
                                <h3>All Games</h3>
                            </div>
                            <p>All Games of categories of Boy, Girl & Mixed</p>
                            <a class="hero-btn" href="/allGames">View</a>
                        </div>

                    </div> */}

        {(() => {
          switch (page) {
            case 'allUser':
              return <AllUsers />;
            case 'sportRegistration':
              return <SportsRegistrations />
            case 'allGames':
              return <AllGames />
            case 'docVerification':
              return <DocumentVerification />
            case "fixtures":
              return <Fixtures/>
            default:
              return <AllUsers />;
          }
        })()}




      </section >
    </div></>
  )
}

export default Admin
