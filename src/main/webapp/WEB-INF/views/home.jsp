<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="sec"
	uri="http://www.springframework.org/security/tags"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

 <article style="font-weight:200;">

            <div class="row" id="main-row">
                <div class="col-md-9 col-sm-9 col-6 col-title mr-4" id="">
                    <h6 style="line-height:10px; color:rgba(0,0,0,0.5) ">Categories</h6>
                </div>
                <div class="col-md-2 col-sm-2 col-5 col-title" id="">
                    <h6 style="line-height:10px; color:rgba(0,0,0,0.5) ">Quick links</h6>
                </div>

                <div class="col-md-3 col-sm-3 col-2" id="">


                    <div class="row" id="">
                        <div class="col-sm">
                            <img src="/resources/assets/categories/education.png">
                            <h7 style="display: inline"><small>Education</small></h7>
                        </div>
                    </div>
                    <div class="row" id="">
                        <div class="col-sm">
                            <img src="/resources/assets/categories/education.png">
                            <h7 style="display: inline"><small>Education</small></h7>
                        </div>
                    </div>
                    <div class="row" id="">
                        <div class="col">
                            <img src="/resources/assets/categories/education.png">
                            <h7 style="display: inline"><small>Education</small></h7>
                        </div>
                    </div>


                </div>

                <div class="col-md-3 col-2 col-sm-3" id="">

                    <div class="row" id="">
                        <div class="col">

                            <div class="row" id="">
                                <div class="col">
                                    <img src="/resources/assets/categories/graphics.png">
                                    <h7 style="display: inline"><small>Graphics&nbsp;&amp;&nbsp;Design</small></h7>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row" id="">
                        <div class="col">

                            <div class="row" id="">
                                <div class="col">
                                    <img src="/resources/assets/categories/graphics.png">
                                    <h7 style="display: inline"><small>Graphics&nbsp;&amp;&nbsp;Design</small></h7>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row" id="">
                        <div class="col">

                            <div class="row" id="">
                                <div class="col">
                                    <img src="/resources/assets/categories/graphics.png">
                                    <h7 style="display: inline"><small>Graphics&nbsp;&amp;&nbsp;Design</small></h7>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-md-3 col-2 col-sm-3 mr-4" id="">
                    <div class="row" id="">
                        <div class="col">

                            <div class="row" id="">
                                <div class="col">
                                    <img src="/resources/assets/categories/reference.png">
                                    <h7 style="display: inline"><small>Reference</small></h7>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row" id="">
                        <div class="col">

                            <div class="row" id="">
                                <div class="col">
                                    <img src="/resources/assets/categories/reference.png">
                                    <h7 style="display: inline"><small>Reference</small></h7>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row" id="">
                        <div class="col">

                            <div class="row" id="">
                                <div class="col">
                                    <img src="/resources/assets/categories/reference.png">
                                    <h7 style="display: inline"><small>Reference</small></h7>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



                <div class="col-2 col-md-2 col-sm-2 navbar-light  quicklinks" id="" style="height: 0px;">
                    <ul class="nopadding navbar-nav" id="">
                        <li class="nav-item" id="" style="list-style: none; width: 150px">
                            <h6>
                                <small class="nav-link">Welcome Volodya</small>
                            </h6>
                        </li>
                        <sec:authorize access="!isAuthenticated()">
                            <li style="list-style: none; line-height: 0px" class="nav-item">
                                <a class="nav-link" href="/login">
                                    <h6>
                                        <small>Account</small>
                                    </h6>
                                </a>
                            </li>
                            <li style="list-style: none; line-height: 0px" class="nav-item">
                                <a class="nav-link" href="/register">
                                    <h6>
                                        <small>Register</small>
                                    </h6>
                                </a>
                            </li>
                        </sec:authorize>



                    </ul>
                </div>


            </div>


        </article>
