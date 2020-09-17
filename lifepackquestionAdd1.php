<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
	<title>OMIND Admin Dashboard </title>
	<link rel="icon" type="image/x-icon" href="assets/img/logoOmind.png" />
	<link href="assets/css/loader.css" rel="stylesheet" type="text/css" />

	<!-- BEGIN GLOBAL MANDATORY STYLES -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700" rel="stylesheet">
	<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	<link href="assets/css/plugins.css" rel="stylesheet" type="text/css" />
	<!-- END GLOBAL MANDATORY STYLES -->

	<!-- BEGIN PAGE LEVEL PLUGINS/CUSTOM STYLES -->
	<link href="plugins/apex/apexcharts.css" rel="stylesheet" type="text/css">
	<link href="assets/css/dashboard/dash_1.css" rel="stylesheet" type="text/css" />
	<!-- END PAGE LEVEL PLUGINS/CUSTOM STYLES -->

</head>

<body class="alt-menu sidebar-noneoverflow">

	<!--  BEGIN NAVBAR  -->
	<div class="header-container fixed-top">
		<header class="header navbar navbar-expand-sm expand-header">
			<a href="javascript:void(0);" class="sidebarCollapse" data-placement="bottom"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
					<line x1="3" y1="12" x2="21" y2="12"></line>
					<line x1="3" y1="6" x2="21" y2="6"></line>
					<line x1="3" y1="18" x2="21" y2="18"></line>
				</svg></a>


			<ul class="navbar-item flex-row ml-auto">

				<li class="nav-item dropdown user-profile-dropdown  order-lg-0 order-1">
					<a href="javascript:void(0);" class="nav-link dropdown-toggle user" id="userProfileDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-check">
							<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
							<circle cx="8.5" cy="7" r="4"></circle>
							<polyline points="17 11 19 13 23 9"></polyline>
						</svg>
					</a>
					<div class="dropdown-menu position-absolute e-animated e-fadeInUp" aria-labelledby="userProfileDropdown">
						<div class="user-profile-section">
							<div class="media mx-auto">
								<img src="assets/img/90x90.jpg" class="img-fluid mr-2" alt="avatar">
								<div class="media-body">
									<h5>Alan Green</h5>
									<p>Web Developer</p>
								</div>
							</div>
						</div>
						<div class="dropdown-item">
							<a href="user_profile.html">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user">
									<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
									<circle cx="12" cy="7" r="4"></circle>
								</svg> <span>My Profile</span>
							</a>
						</div>
						<div class="dropdown-item">
							<a href="apps_mailbox.html">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-inbox">
									<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
									<path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
								</svg> <span>My Inbox</span>
							</a>
						</div>
						<div class="dropdown-item">
							<a href="auth_lockscreen.html">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock">
									<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
									<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
								</svg> <span>Lock Screen</span>
							</a>
						</div>
						<div class="dropdown-item">
							<a href="#">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out">
									<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
									<polyline points="16 17 21 12 16 7"></polyline>
									<line x1="21" y1="12" x2="9" y2="12"></line>
								</svg> <span id="logout">Log Out</span>
							</a>
						</div>
					</div>
				</li>
			</ul>
		</header>
	</div>
	<!--  END NAVBAR  -->

	<!--  BEGIN MAIN CONTAINER  -->
	<div class="main-container sidebar-closed sbar-open" id="container">

		<div class="overlay"></div>
		<div class="cs-overlay"></div>
		<div class="search-overlay"></div>

		<!--  BEGIN SIDEBAR  -->
		<div class="sidebar-wrapper sidebar-theme">

			<div id="dismiss" class="d-lg-none"><i class="flaticon-cancel-12"></i></div>
			<nav id="sidebar">

				<ul class="navbar-nav theme-brand flex-row  text-center">
					<li class="nav-item theme-logo">
						<a href="index.php">
							<img src="assets/img/logoOmind.png" class="navbar-logo" alt="logo">
						</a>
					</li>
					<li class="nav-item theme-text">
						<a href="index.php" class="nav-link"> Omind </a>
					</li>
				</ul>

				<ul class="list-unstyled menu-categories" id="accordionExample">
					<li class="menu active">
						<a href="index.php" aria-expanded="true" class="dropdown-toggle">
							<div class="">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
									<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
									<polyline points="9 22 9 12 15 12 15 22"></polyline>
								</svg>
								<span>Dashboard</span>
							</div>
						</a>
					</li>
					<li class="menu ">
						<a href="lifepack.php" aria-expanded="true" class="dropdown-toggle">
							<div class="">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-box">
									<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
									<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
									<line x1="12" y1="22.08" x2="12" y2="12"></line>
								</svg>
								<span style="color:orange;">Life Pack</span>
							</div>
						</a>
					</li>
					<li class="menu ">
						<a href="dataDownload.php" aria-expanded="true" class="dropdown-toggle">
							<div class="">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download">
									<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
									<polyline points="7 10 12 15 17 10"></polyline>
									<line x1="12" y1="15" x2="12" y2="3"></line>
								</svg>
								<span>Data Download</span>
							</div>
						</a>
					</li>

					<li class="menu ">
						<a href="pages_helpdesk.php" aria-expanded="true" class="dropdown-toggle">
							<div class="">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users">
									<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
									<circle cx="9" cy="7" r="4"></circle>
									<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
									<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
								</svg>
								<span>Help Center</span>
							</div>
						</a>
					</li>






				</ul>
			</nav>


		</div>
		<!--  END SIDEBAR  -->

		<!--  BEGIN CONTENT AREA  -->
		<div id="content" class="main-content">
			<div class="layout-px-spacing">
				<div class="page-header">
					<div class="page-title">
						<!-- <h3>Life Pack</h3> -->
					</div>
				</div>
				<!-- CONTENT AREA -->
				<div class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
					<div class="widget widget-one">
						<div class="row">
							<div class="container">
								<form class="form-vertical" id="lifepackQuestionForm" method="POST">
									<div class="form-group mb-4">
										<label class="control-label">Question Name </label>
										<input type="text" name="name" id="nameQuestion" class="form-control">
									</div>
									<div class="form-group mb-4">
										<label class="control-label"> Question Description </label>
										<textarea type="text" name="desc" id="desc" class="form-control"> </textarea>
									</div>
									<div id="boxOptions">
										<div class="form-group mb-4">
											<label class="control-label">Option 1 </label>
											<input type="text" name="option1" id="option1" class="form-control">
										</div>

										<div class="form-group mb-4">
											<label class="control-label">Option 2 </label>
											<input type="text" name="option2" id="option2" class="form-control">
										</div>
										<div class="form-group mb-4">
											<label class="control-label">Option 3</label>
											<input type="text" name="option3" id="option3" class="form-control">
										</div>
										<div class="form-group mb-4">
											<label class="control-label">Option 4</label>
											<input type="text" name="option4" id="option4" class="form-control">
										</div>
									</div>

									<div class="form-group mb-4">
										<label class="control-label">Answer</label>
										<input type="text" name="answer" id="answer" class="form-control">
									</div>
									<div class="assings-packs">
										<div class="form-group mb-4">
											<label for="exampleFormControlSelect1">Assigns to</label>
											<select class="form-control selectPacks" id="selectPacks1" name="selectPacks1">
										
											</select>
										</div>
									</div>
									<button class="btn float-left ml-4" id="addPacks"><i class="flaticon-cancel-12"></i>Assigns more</button>
									<br>
									<div class="mt-4 float-right">
										<button type="submit" id="lpAddBtn" class="btn btn-primary float-right ml-4">Add</button>
										<button class="btn btn-danger float-right ml-10"><i class="flaticon-cancel-12"></i> Discard</button>
										<button class="btn float-right ml-4" id="addOption"><i class="flaticon-cancel-12"></i> Add Option</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<!-- CONTENT AREA -->
			</div>
		</div>
		<!--  END CONTENT AREA  -->
	</div>
	<!-- END MAIN CONTAINER -->
	<!-- BEGIN GLOBAL MANDATORY SCRIPTS -->
	<script src="assets/js/libs/jquery-3.1.1.min.js"></script>
	<script src="bootstrap/js/popper.min.js"></script>
	<script src="bootstrap/js/bootstrap.min.js"></script>
	<script src="plugins/perfect-scrollbar/perfect-scrollbar.min.js"></script>
	<script src="assets/js/app.js"></script>

	<script>
		$(document).ready(function() {
			App.init();
		});
		i = 1;
		$('#addPacks').click((e) => {
			e.preventDefault();

			$('.assings-packs').append('<div id="selectPacks' + (i + 1) + '" class="form-group"><label for="exampleFormControlSelect1">select other user</label><select class="form-control selectPacks"  name="selectPacks' + (i + 1) + '"></select><span onclick=(removePacks(' + (i + 1) + ')) class="float-right mt-2 mb-3 badge outline-badge-danger">Remove</span></div>');
			i++;
			getLifepacks()
		});

		function removePacks(id) {
			$('#selectPacks' + id).remove();
		}

	</script>
	<script src="assets/js/custom.js"></script>
	<!-- END GLOBAL MANDATORY SCRIPTS -->

	<!-- BEGIN PAGE LEVEL PLUGINS/CUSTOM SCRIPTS -->

	<!-- BEGIN PAGE LEVEL PLUGINS/CUSTOM SCRIPTS -->
	<?php include 'firebase.php'; ?>
	<script src="lifepackQuestionsAdd.js"></script>
</body>

</html>