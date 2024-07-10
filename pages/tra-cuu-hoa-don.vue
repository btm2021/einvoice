<template>
    <b-overlay :show="overlay">

        <div v-if="!isValid" class="container mt-5">
            <div class="row d-flex justify-content-center">
                <div class="col-md-6">

                    <div class="card px-5 py-5" id="form1">

                        <div class="row text-primary font-weight-bold" style="background-color:#d4dbf9">
                            <div class="col-7">
                                Chào mừng bạn !
                                <br />
                                4Sie E-Invoice Client
                                <img src="/logo.png" class="card-img-top img-fluid" alt="...">
                            </div>
                            <div class="col-5">
                                <img src="/profile.png" class="card-img-top img-fluid" alt="...">
                            </div>
                        </div>

                        <b-form @submit.prevent="onSubmit">
                            <div class="form-data mt-2">
                                <h4 class="text-center">Tra Cứu Hóa Đơn</h4>
                                <p class="text-danger font-bold">{{ msg }}</p>
                                <div class="forms-inputs mb-4">
                                    <b-form-group label="Mã hóa đơn">
                                        <b-form-input type="search" style="text-transform: uppercase;"
                                            v-model="form.mahoadon" autocomplete="off"
                                            placeholder="Nhập mã hóa đơn"></b-form-input>
                                    </b-form-group>
                                </div>
                                <div class="forms-inputs mb-4">
                                    <b-form-group label="Khóa bí mật">
                                        <b-form-input type="search" v-model="form.passcode" autocomplete="off"
                                            placeholder="Passcode hóa đơn"></b-form-input>
                                    </b-form-group>
                                </div>
                                <div class=" forms-inputs mb-4">
                                    <Turnstile v-model="token" />
                                </div>

                                <div class="mb-3"> <b-button variant="primary" type="submit" block>Tra cứu </b-button>
                                </div>
                            </div>
                        </b-form>

                        <div class="success-data">
                            <div class="text-center d-flex flex-column text-danger font-weight-bolder"> 4Sie E-Invoice ©
                                2024</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </b-overlay>
</template>

<script>


export default {
    data() {
        return {
            token: null,
            msg: '',
            form: {
                mahoadon: null,
                passcode: null,
            },
            overlay: false,


        }
    },
    mounted() {
        if (this.$route.query.s) {

            let a = this.$route.query.s;
            if (a.length != 15) {
                this.msg = 'Mã hóa đơn không hợp lệ'
            }
            this.form.mahoadon = a

        }


    },
    methods: {
        onSubmit(){
            console.log(this.token)
        }
    }
}
</script>
<style>
.r:hover {
    cursor: pointer;
    color: red
}
</style>