<template>
  <div class="container">
  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <div class="panel panel-default">
        <div class="panel-heading">Login</div>
        <div class="panel-body">
          <form class="form-horizontal" role="form">
            <div class="form-group">
              <label for="email" class="col-md-4 control-label">E-Mail Address: </label>
              <div class="col-md-6">
                <input id="email" type="email" class="form-control" name="email" value="" placeholder="E-Mail Address" required autofocus>
              </div>
            </div>

            <div class="form-group">
              <label for="password" class="col-md-4 control-label">Password: </label>
              <div class="col-md-6">
                <input id="password" type="password" class="form-control" name="password" placeholder="Password" required>
              </div>
            </div>

            <div class="form-group">
              <div class="col-md-8 col-md-offset-3">
                <button type="submit" class="btn btn-primary"> Login </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>