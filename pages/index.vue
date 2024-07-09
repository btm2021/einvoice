<template>
  <div class="container mt-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-6">

        <div class="card px-5 py-5" id="form1">

          <div class="row text-primary font-weight-bold" style="background-color:#d4dbf9">
            <div class="col-7">
              Chào mừng bạn !
              <br/>
              4Sie E-Invoice Client
              <img src="/logo.png" class="card-img-top img-fluid" alt="...">
            </div>
            <div class="col-5">
              <img src="/profile.png" class="card-img-top img-fluid" alt="...">
            </div>
          </div>
          
          <div class="form-data mt-2">
            <div class="forms-inputs mb-4">
              <b-form-group label="Email">
                <b-form-input autocomplete="off"  placeholder="Nhập email"></b-form-input>
              </b-form-group>
            </div>
            <div class="forms-inputs mb-4"> <b-form-group label="Password">
                <b-form-input autocomplete="off"  placeholder="Nhập password"></b-form-input>
              </b-form-group>
            </div>
            <div class="mb-3"> <b-button variant="primary" block>Login</b-button> </div>
          </div>
          <div class="success-data">
            <div class="text-center d-flex flex-column text-danger font-weight-bolder"> 4Sie E-Invoice © 2024</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
