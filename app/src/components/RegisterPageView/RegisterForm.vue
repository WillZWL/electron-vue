<template>
  <div class="container">
  <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <div class="panel panel-default">
        <div class="panel-heading">Register</div>
        <div class="panel-body">
          <form @submit.prevent="Register" class="form-horizontal" role="form">
            <div class="form-group">
              <label for="email" class="col-md-4 control-label">E-Mail Address: </label>
              <div class="col-md-6">
                <input id="email" type="email" class="form-control" name="email" value="" required autofocus>
              </div>
            </div>
            <div class="form-group">
              <label for="password" class="col-md-4 control-label">Password: </label>
              <div class="col-md-6">
                <input id="password" type="password" class="form-control" name="password" required>
              </div>
            </div>
            <div class="form-group">
              <label for="password" class="col-md-4 control-label">Comfirm Password: </label>
              <div class="col-md-6">
                <input id="password" type="password" class="form-control" name="password" required>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-8 col-md-offset-3">
                <button type="submit" class="btn btn-primary"> Register </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>