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


                        <div class="form-data mt-2">
                            <h4 class="text-center p-5">Tra Cứu Hóa Đơn</h4>
                            <div class="forms-inputs mb-4">
                                <b-form-group label="Mã hóa đơn">
                                    <b-form-input autocomplete="off" placeholder="Nhập mã hóa đơn"></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="forms-inputs mb-4">
                                <b-form-group label="Khóa bí mật">
                                    <b-form-input autocomplete="off" placeholder="Nhập mã hóa đơn"></b-form-input>
                                </b-form-group>
                            </div>
                            <div class="forms-inputs mb-4 row">
                                <div class="col-5">
                                    <b-form-group label="Captcha">
                                        <b-form-input v-model="formCapcha" autocomplete="off"
                                            placeholder="Nhập capcha"></b-form-input>
                                    </b-form-group>
                                </div>
                                <div class="col-7">
                                    <canvas id="valicode" style="width:100%;height:100px"></canvas>
                                    <i class="r" @click="getImgValiCode"
                                        style='font-size:24px;position: absolute;top: 20px;font-weight: 500'> &reg;</i>
                                </div>

                            </div>
                            <div class="mb-3"> <b-button variant="primary" block @click="checkCap">Login</b-button>
                            </div>
                        </div>
                        <div class="success-data">
                            <div class="text-center d-flex flex-column text-danger font-weight-bolder"> 4Sie E-Invoice ©
                                2024</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
          
            <b-embed src="https://pdfobject.com/pdf/sample.pdf" />
        </div>
    </b-overlay>
</template>

<script>
export default {
    data() {
        return {
            overlay: true,
            capcha: null,
            mahoadon: null,
            formCapcha: null,
            isValid: false,

        }
    },
    mounted() {
        this.getImgValiCode()

    },
    methods: {
        checkCap() {
            if (this.formCapcha === this.capcha) {

                this.isValid = true
            } else {
                // alert('sai mã')
                this.getImgValiCode()
                this.formCapcha = null
            }

        },
        getImgValiCode() {

            this.overlay = true
            let canvas = document.getElementById('valicode')
            let showNum = [];

            let context = canvas.getContext('2d');
            let canvasWinth = 200;
            let canvasHeight = 50;
            canvas.width = canvasWinth;
            canvas.height = canvasHeight;
            let sCode = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,y,z,0,1,2,3,4,5,6,7,8,9,<,?,.,(,),-,_,+,=,{,},[,],!,@,#,$,%,&,^,*,~';
            let saCode = sCode.split(',');
            let saCodeLen = saCode.length;
            for (let i = 0; i <= 7; i++) {
                let sIndex = Math.floor(Math.random() * saCodeLen);
                let sDeg = (Math.random() * 10 * Math.PI) / 180;
                let cTxt = saCode[sIndex];
                showNum[i] = cTxt.toLowerCase();
                let x = 10 + i * 20;
                let y = 20 + Math.random() * 8;
                context.font = 'bold 30px tahoma';
                context.translate(x, y);
                context.rotate(sDeg);

                context.fillStyle = this.randomColor();
                context.fillText(cTxt, 0, 0);

                context.rotate(-sDeg);
                context.translate(-x, -y);
            }
            for (let i = 0; i <= 5; i++) {
                context.strokeStyle = this.randomColor();
                context.beginPath();
                context.moveTo(
                    Math.random() * canvasWinth,
                    Math.random() * canvasHeight
                );
                context.lineTo(
                    Math.random() * canvasWinth,
                    Math.random() * canvasHeight
                );
                context.stroke();
            }
            for (let i = 0; i < 30; i++) {
                context.strokeStyle = this.randomColor();
                context.beginPath();
                let x = Math.random() * canvasWinth;
                let y = Math.random() * canvasHeight;
                context.moveTo(x, y);
                context.lineTo(x + 1, y + 1);
                context.stroke();
            }
            let rightCode = showNum.join('');
            console.log(rightCode)
            this.capcha = rightCode
            this.overlay = false
        },

        randomColor() {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            return 'rgb(' + r + ',' + g + ',' + b + ')';
        },
        genCap() {
            let rightCode = '';
            let valiIpt = document.querySelector('#valiIpt');
            let toggleBtn = document.querySelector('#toggle');
            let submitBtn = document.querySelector('#submit');
            toggleBtn.addEventListener('click', function () {
                getImgValiCode();
                console.log('click:' + rightCode);
            }, false);
            submitBtn.addEventListener('click', function () {
                if (valiIpt.value === '') {
                    alert('verification code must be filled!');
                    return false;
                }
                if (valiIpt.value !== rightCode) {
                    alert('Verification code error!');
                    return false;
                }
                alert('Submitted successfully!')
                valiIpt.value = '';
            }, false);
            getImgValiCode();
            console.log('init:' + rightCode);

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