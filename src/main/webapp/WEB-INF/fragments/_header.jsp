<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
    <%@ taglib prefix="sec"
	uri="http://www.springframework.org/security/tags"%>
        <%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

            <header>

                <nav id="" class="navbar navbar-expand navbar-light fixed-top">
                    <div class="blur"></div>

                        <div class="menu collapse navbar-collapse" id="idNav">

                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item"><a class="nav-link menu-btn" id="featured" href="featured"> <small class="navtext"
							style="margin-left: -20px;">Featured</small>
					</a></li>
                                <li class="nav-item"><a class="nav-link menu-btn" id="topcharts" href="topcharts"> <small class="navtext"
							style="margin-left: -25px;">Top&nbsp;Charts</small>
					</a></li>

                                <li class="nav-item"><a class="nav-link menu-btn" id="categories" href="categories"> <small class="navtext"
							style="margin-left: -20px;">Categories</small>
					</a></li>

                                <li class="nav-item"><a class="nav-link menu-btn" id="purchased" href="purchased"> <small class="navtext"
							style="margin-left: -20px;">Purchased</small>
					</a></li>


                            </ul>
                            
                            <ul class=" navbar-nav">
                               <li class="nav-item">
                                   <form class=" " id="search-form">
                                <div class="input-group input-group-sm">
                                    <input class="form-control 
" id = "search-input" type="search" placeholder="Search" aria-label="Search" aria-describedby="inputGroup-sizing-sm">
                                    <span class="input-group-btn">
							<button class="btn btn-outline-success" id="search" type="submit">

							</button>

						</span>
                                </div>

                            </form>
                               </li>
                                

                            </ul>
                            
                        </div>

                </nav>

            </header>


            <!-- <header> -->
            <!-- 	<nav id="myNav" -->
            <!-- 		class="navbar navbar-light bg-light fixed-top navbar-expand"> -->
            <!-- 		<div class="container"> -->
            <!-- 			<div class="" id="idNav"> -->

            <!-- 				<ul class="navbar-nav"> -->
            <!-- 					<li class="nav-item"><a class="nav-link" id="featured" -->
            <%-- 						href="${pageContext.request.contextPath}/resources/assets/categories/featured.jsp"> <!--                    <img src="assets/nav-bar-icons/i1_1967ca6a.png" width="30" height="30" alt=""><br><small><i>Featured</i></small>--> --%>
                <!-- 							<small class="navtext" style="margin-left: -20px;">Featured</small> -->
                <!-- 					</a></li> -->
                <!-- 					<li class="nav-item"><a class="nav-link" id="featured" -->
                <!-- 						href="#"> <small class="navtext" style="margin-left: -25px;">Top&nbsp;Charts</small> -->
                <!-- 					</a></li> -->

                <!-- 					<li class="nav-item"><a class="nav-link" id="featured" -->
                <!-- 						href="#"> <small class="navtext" style="margin-left: -20px;">Categories</small> -->
                <!-- 					</a></li> -->

                <!-- 					<li class="nav-item"><a class="nav-link" id="featured" -->
                <!-- 						href="#"> <small class="navtext" style="margin-left: -20px;">Purchased</small> -->
                <!-- 					</a></li> -->

                <%-- 					<sec:authorize access="isAuthenticated()"> --%>
                    <%-- 						<sec:authentication property="principal.username" var="username" /> --%>
                        <%-- 						<li><a href="/user">${username}</a></li> --%>

                            <%-- 						<c:url var="logoutUrl" value="/logout" /> --%>
                                <%-- 						<form:form action="${logoutUrl}" method="post" --%>
                                    <%-- 							cssStyle="padding-top: 7px;"> --%>
                                        <!-- 							<li><input class="btn btn-danger" type="submit" -->
                                        <!-- 								value="logout" /></li> -->
                                        <%-- 						</form:form> --%>
                                            <%-- 					</sec:authorize> --%>
                                                <!-- 				</ul> -->


                                                <!-- 			</div> -->
                                                <!-- 			<div class="text-left ml-auto"> -->
                                                <%-- 				<form class="form-inline " id="search-form"> --%>
                                                    <!-- 					<div class="input-group input-group-sm  my-sm-2 mb-2"> -->
                                                    <!-- 						<input class="form-control  -->
                                                    <!-- " type="search" placeholder="Search" -->
                                                    <!-- 							aria-label="Search" aria-describedby="inputGroup-sizing-sm"> -->
                                                    <!-- 					</div> -->
                                                    <!-- 					<button class="btn btn-outline-success my-sm-2 mb-2" id="search" -->
                                                    <!-- 						type="submit"></button> -->
                                                    <%-- 				</form> --%>
                                                        <!-- 			</div> -->
                                                        <!-- 		</div> -->
                                                        <!-- 	</nav> -->

                                                        <!-- </header> -->
