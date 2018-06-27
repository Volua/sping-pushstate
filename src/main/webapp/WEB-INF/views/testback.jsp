<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="sec"
	uri="http://www.springframework.org/security/tags"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>main menu</title>
    <link rel="stylesheet" href="/css/style.css">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="js/slideshow.js">
    </script>
    <script src="js/script.js"></script>
    <script src=""></script>
</head>

<body>

    <header>

        <nav id="myNav" class="navbar navbar-light fixed-top navbar-expand">
            <div class="blur"></div>

            <div class="container">
                <div class="menu" id="idNav" name="bar">

                    <ul class="navbar-nav">
                        <li class="nav-item"><a class="nav-link menu-btn" id="featured" href="slide.html"> 
							<small class="navtext" style="margin-left: -20px;">Featured</small>
					</a></li>
                        <li class="nav-item"><a class="nav-link menu-btn" id="topcharts" href="#"> <small class="navtext" style="margin-left: -25px;">Top&nbsp;Charts</small>
					</a></li>

                        <li class="nav-item"><a class="nav-link menu-btn" id="categories" href="index5.html"> <small class="navtext" style="margin-left: -20px;">Categories</small>
					</a></li>

                        <li class="nav-item"><a class="nav-link menu-btn" id="purchased" href="#"> <small class="navtext" style="margin-left: -20px;">Purchased</small>
					</a></li>

                    </ul>


                </div>
                <div class="text-left ml-auto navbar-header">
                    <form class="navbar-form navbar-right " id="search-form">
                        <div class="input-group input-group-sm">
                            <input class="form-control 
" type="search" placeholder="Search" aria-label="Search" aria-describedby="inputGroup-sizing-sm">
                            <span class="input-group-btn">
                                <button class="btn btn-outline-success" id="search" type="submit">
                                    
                                </button>

                               </span>
                        </div>

                    </form>
                </div>
            </div>
        </nav>

    </header>

    <div class="test">
        <button class="btn btn-success" type="button" id="submit">Success</button>
    </div>
    					<a href="${text}/register">Register</a>
<script>
var result = ${text};
console.log(result);
console.log('hi from jsp');
</script>
<div id="divchyk"></div>
</body>
</html>