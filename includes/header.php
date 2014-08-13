<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML+RDFa 1.0//EN"
  "http://www.w3.org/MarkUp/DTD/xhtml-rdfa-1.dtd">
<html>
<head>
<title><?php print $page_title; ?></title>

  <!-- jquery -->
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js" ></script>

  <!-- typekit -->
  <script type="text/javascript" src="//use.typekit.net/zky1mem.js"></script>
  <script type="text/javascript">try{Typekit.load();}catch(e){}</script>

  <!-- mobile menu -->
  <script type="text/javascript" src="../js/mobile-menu.js"></script>

  <!-- CSS theme files -->
  <link type="text/css" rel="stylesheet" media="all" href="../css/unsemantic-grid-responsive.css" />
  <link type="text/css" rel="stylesheet" media="all" href="../css/normalize.css" />
  <link type="text/css" rel="stylesheet" media="all" href="../css/layout.css" />
  <link type="text/css" rel="stylesheet" media="all" href="../css/global_typography.css" />
  <link type="text/css" rel="stylesheet" media="all" href="../css/main_menu.css" />
  <link type="text/css" rel="stylesheet" media="all" href="../css/footer.css" />

  <!-- superfish -->
  <link rel="stylesheet" href="../css/superfish/superfish.css" media="screen">
  <script src="../js/superfish/jquery.js"></script>
  <script src="../js/superfish/hoverIntent.js"></script>
  <script src="../js/superfish/superfish.js"></script>

</head>

<body>
	<!-- Header grid container and region container -->
 <div id="header-bar">
     <div class="grid-100 grid-parent clearfix"> 

      <!-- MOBILE HEADER -->
      <div id="mobile-menu-button"><a href="javascript:toggleMenu()"></a></div> 
      <div id="mobile-logo"><a href="/"></a></div>

      <!-- DESKTOP HEADER -->
      <div class="grid-25 grid-parent clearfix">
        <div id="full-logo" ><a href="/"><img class="responsive-logo"src='../images/explo_logo_236x72.gif'></a></div>
      </div>
     

      <div class="grid-45 clearfix">
        <div id="main-menu" >
          <?php include '../includes/nav.php' ?>
        </div>
      </div>

    </div>  <!--end header grid-100 gridparent -->
  </div><!-- end header bar