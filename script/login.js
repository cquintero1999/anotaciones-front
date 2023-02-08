cargarLogin()
function cargarLogin(){
    body=`<div class="container-fluid">
    <div class="row main-content bg-success text-center">
        <div class="col-md-4 text-center company__info">
            <span class="company__logo"><h2><span class="fa fa-android"></span></h2></span>
            <h4 class="company_title"></h4>
        </div>
        <div class="col-md-8 col-xs-12 col-sm-12 login_form ">
            <div class="container-fluid">
                <div class="row">
                    <h2>Log In</h2>
                </div>
                <div class="row">
                    <form control="" class="form-group">
                        <div class="row">
                            <input type="text" name="username" id="username" class="form__input" placeholder="Username">
                        </div>
                        <div class="row">
                            <!-- <span class="fa fa-lock"></span> -->
                            <input type="password" name="password" id="password" class="form__input" placeholder="Password">
                        </div>
                        <div class="row">
                            <input type="checkbox" name="remember_me" id="remember_me" class="">
                            <label for="remember_me">Remember Me!</label>
                        </div>
                        <div class="row text-center">
                            <input type="submit" value="Submit" class="btnL">
                        </div>
                    </form>
                </div>
                <div class="row">
                    <p>Don't have an account? <a href="#">Register Here</a></p>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Footer -->
<div class="container-fluid text-center footer">
    Coded with &hearts; by <a href="https://bit.ly/yinkaenoch">Yinka.</a></p>
</div>`
document.getElementById("login").innerHTML=body;
}