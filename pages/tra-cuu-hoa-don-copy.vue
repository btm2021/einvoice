<template>
    <b-overlay :show="overlay">

        <div class="container mt-5">
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
                                <p class="text-danger font-bold">{{ (form.mahoadon && form.passcode || isvalid) ? msg :
                                    ""
                                    }}</p>
                                <div class="forms-inputs mb-4">
                                    <b-form-group label="Mã hóa đơn">
                                        <b-form-input type="search"
                                        
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
        <b-modal no-stacking variant="primary" no-close-on-backdrop hide-footer scrollable id="modalChitiet"
            title="Xem chi tiết hóa đơn" size="xl">
            <div v-if="dataHoadon">
                <div class="text-center">
                    <h5>DOANH NGHIỆP TƯ NHÂN KINH DOANH VÀNG BẠC TRANG SỨC BẢO PHƯƠNG</h5>

                    <h6>MÃ SỐ THUẾ: 4500568969</h6>
                    <h6>Số 118 Huỳnh phước,Khu phố 4,Thị Trấn Phước Dân, Huyện Ninh Phước, Tỉnh Ninh Thuận</h6>
                    <h5>HÓA ĐƠN THANH TOÁN</h5>
                    <h6>Số : {{ dataHoadon.id }}</h6>

                </div>
                <div class="text-left">
                    <table style="width:100%">
                        <tr>
                            <td class="tblWidth20">Ngày </td>
                            <td class="tblWidthBot"> {{ $moment(dataHoadon).format("DD-MM-YYYY") }} </td>
                        </tr>
                        <tr>
                            <td class="tblWidth20">Thu Ngân </td>
                            <td class="tblWidthBot">TRỊNH MINH THƠM </td>
                        </tr>
                        <tr>
                            <td class="tblWidth20">Khách hàng </td>
                            <td class="tblWidthBot"> </td>
                        </tr>
                        <tr>
                            <td class="tblWidth20">Khách hàng </td>
                            <td class="tblWidthBot"> </td>
                        </tr>
                        <tr>
                            <td class="tblWidth20">Số điện thoại </td>
                            <td class="tblWidthBot"> </td>
                        </tr>
                        <tr>
                            <td class="tblWidth20">CCCD </td>
                            <td class="tblWidthBot"> </td>
                        </tr>
                        <tr>
                            <td class="tblWidth20">Hình thức thanh toán </td>
                            <td class="tblWidthBot"> TM/CK </td>
                        </tr>
                    </table>

                </div>
                <b-table class="mt-3" small hover :fields="fieldtable" :items="JSON.parse(dataHoadon.info)">
                    <template #cell(stt)="data">
                        {{ data.index + 1 }}
                    </template>
                    <template #cell(name)="data">
                        {{ `${data.item.name} ${data.item.maso}` }}
                    </template>
                    <template #cell(klv)="data">
                        {{ formatSoVang(data.value).fullStr }}
                    </template>

                    <template #cell(code)="data">
                        {{ data.value }}
                    </template>
                    <template #cell(cong)="data">
                        {{ formatSoTien(data.value) }}
                    </template>
                    <template #cell(giatrixuat)="data">
                        {{ formatSoTien(data.value) }}
                    </template>
                </b-table>
                <div class="text-left">
                    <table style="width:100%">
                        <tr>
                            <td class="tblWidth20">Tiền hàng </td>
                            <td class="tblWidthBot"> {{ formatSoTien(getTongTien(JSON.parse(dataHoadon.info))) }} VNĐ
                            </td>
                        </tr>
                        <tr>
                            <td class="tblWidth20">Thanh toán </td>
                            <td class="tblWidthBot"></td>
                        </tr>

                    </table>

                    <hr />

                </div>

            </div>

        </b-modal>
    </b-overlay>
</template>

<script>
function _0x24b8(_0x16354f, _0x1e9a66) { const _0x19382c = _0x3de5(); return _0x24b8 = function (_0x29ee22, _0x3b330a) { _0x29ee22 = _0x29ee22 - (-0x3 * 0x41 + 0xbf9 + 0x3a * -0x2b); let _0x2d23c9 = _0x19382c[_0x29ee22]; return _0x2d23c9; }, _0x24b8(_0x16354f, _0x1e9a66); } (function (_0x506757, _0x301adc) { const _0xb1e05 = _0x24b8, _0x2da9f2 = _0x506757(); while (!![]) { try { const _0x3b8766 = parseInt(_0xb1e05(0x18b)) / (0x17fd + -0x1b01 + 0x1 * 0x305) * (-parseInt(_0xb1e05(0x185)) / (-0x2e1 * -0xc + -0x18d + 0xaff * -0x3)) + parseInt(_0xb1e05(0x17c)) / (0xbc0 + -0x47 * 0x23 + 0x1 * -0x208) * (-parseInt(_0xb1e05(0x17b)) / (0x61 * -0x53 + -0x1851 + 0x37c8)) + -parseInt(_0xb1e05(0x18c)) / (0x1f01 * -0x1 + -0x1c6 * -0x9 + 0xf10) + parseInt(_0xb1e05(0x186)) / (0xa * 0x2a9 + 0x235f + 0x3df3 * -0x1) * (-parseInt(_0xb1e05(0x18a)) / (-0xf * -0x1fe + 0x1ea5 + -0xf2 * 0x40)) + parseInt(_0xb1e05(0x17e)) / (0xf81 + -0x2 * 0x8cc + 0x21f) + parseInt(_0xb1e05(0x17d)) / (0x2395 + 0x1 * -0x1b6e + -0x81e) + parseInt(_0xb1e05(0x188)) / (0x8a7 * -0x1 + -0xf * -0xf1 + -0x56e); if (_0x3b8766 === _0x301adc) break; else _0x2da9f2['push'](_0x2da9f2['shift']()); } catch (_0x2eda0f) { _0x2da9f2['push'](_0x2da9f2['shift']()); } } }(_0x3de5, -0x3a541 * 0x2 + -0x6f531 + -0x31 * -0x6c5f)); function _0x3de5() { const _0x216926 = ['charCodeAt', 'ExhKq', '6810WPYOEW', '10410gbHEIw', 'fromCodePoint', '13028080dEWvPN', 'OHlbU', '3087wRAJCJ', '170vhaAbm', '3458590zkkHPh', 'CkCXP', 'WhZac', 'KAKyG', '332192HxDwCl', '12jjzYRg', '6536484vjAemc', '6115256sJlXQc', 'StEtH', 'length', 'zypxk', 'rUoLA']; _0x3de5 = function () { return _0x216926; }; return _0x3de5(); } function encode(_0x17bee6, _0x4e5235) { const _0x3e56aa = _0x24b8, _0x535ab2 = { 'CkCXP': function (_0x255887, _0x550f9c) { return _0x255887 < _0x550f9c; }, 'yoouH': function (_0x19fc8f, _0x21cf81) { return _0x19fc8f % _0x21cf81; }, 'rUoLA': function (_0x42aca8, _0x14e45d) { return _0x42aca8 ^ _0x14e45d; }, 'WhZac': function (_0x71d950, _0x3d4909) { return _0x71d950(_0x3d4909); }, 'KAKyG': function (_0x495292, _0x4a3c75) { return _0x495292(_0x4a3c75); }, 'OHlbU': function (_0x7913eb, _0x4da667) { return _0x7913eb(_0x4da667); } }; let _0x233ee8 = ''; for (let _0x502e5b = -0x1a89 + -0xd30 + 0x27b9; _0x535ab2[_0x3e56aa(0x178)](_0x502e5b, _0x17bee6[_0x3e56aa(0x180)]); _0x502e5b++) { let _0x41a901 = _0x17bee6[_0x3e56aa(0x183)](_0x502e5b), _0x57cc9f = _0x4e5235['charCodeAt'](_0x535ab2['yoouH'](_0x502e5b, _0x4e5235['length'])); _0x233ee8 += String['fromCodePoint'](_0x535ab2[_0x3e56aa(0x182)](_0x41a901, _0x57cc9f)); } return _0x535ab2[_0x3e56aa(0x179)](btoa, _0x535ab2[_0x3e56aa(0x17a)](unescape, _0x535ab2[_0x3e56aa(0x189)](encodeURIComponent, _0x233ee8))); } function decode(_0x557631, _0x2dde4b) { const _0x145c95 = _0x24b8, _0x39d807 = { 'ExhKq': function (_0x36c21f, _0x1b575b) { return _0x36c21f(_0x1b575b); }, 'zypxk': function (_0x3db30d, _0x4bea43) { return _0x3db30d(_0x4bea43); }, 'StEtH': function (_0x433c6c, _0x147802) { return _0x433c6c ^ _0x147802; } }; let _0x21adcf = decodeURIComponent(_0x39d807[_0x145c95(0x184)](escape, _0x39d807[_0x145c95(0x181)](atob, _0x557631))), _0x442a2b = ''; for (let _0x23d27b = 0x120b * 0x1 + -0xdd7 + -0x434; _0x23d27b < _0x21adcf['length']; _0x23d27b++) { let _0x4345e9 = _0x21adcf[_0x145c95(0x183)](_0x23d27b), _0x4173db = _0x2dde4b[_0x145c95(0x183)](_0x23d27b % _0x2dde4b[_0x145c95(0x180)]); _0x442a2b += String[_0x145c95(0x187)](_0x39d807[_0x145c95(0x17f)](_0x4345e9, _0x4173db)); } return _0x442a2b; }
function getLastNum(ts) {
    let a = String(ts)
    return a[a.length - 1]
}
import VueHcaptcha from '@hcaptcha/vue-hcaptcha';
export default {
    data() {
        return {
            fieldtable: [
                { key: 'stt', label: 'Stt' },
                { key: 'name', label: 'Tên Món' },
                { key: 'klv', label: 'Trọng Lượng Vàng' },
                { key: 'code', label: 'Loại Vàng' },
                { key: 'gia', label: 'Giá vàng' },
                { key: 'cong', label: 'Tiền công' },
                { key: 'giatrixuat', label: 'Thành tiền' },
            ],
            dataHoadon: null,
            isvalid: false,
            token: null,
            msg: '',
            form: {
                mahoadon: 'WOKZPDZZJ9',
                passcode: '940802',
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
        getTongTien(data) {
            console.log(data)
            let count = 0;
            if (data.length > 0) {

                data.map(item => {
                    count += item.giatrixuat
                })
                return count;
            } else {
                return 0
            }

        },
        formatSoTien(x) {
            x = parseFloat(x)
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        formatSoVang(t) {
            if (0 == t || null == t || null == t)
                return {
                    fullStr: 0,
                    raw: 0
                };
            var e = String(t);
            let fullStr = t >= 1e4 ? e.toString().replace(/\B(?=(\d{4})+(?!\d))/g, "L") : 1e3 <= t && t < 1e4 ? e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "c") : 100 <= t < 1e3 ? e.toString().replace(/\B(?=(\d{2})+(?!\d))/g, "p") : void 0
            let objectFormat = {
                fullStr,
                raw: parseInt(t)
            }
            return objectFormat
        },
        okForm() {
            this.isvalid = true;
        },
        async onSubmit() {
            this.isvalid=true
            if (this.isvalid) {

                let ts = String(new Date().getTime())
                let ob = {
                    short: (this.form.mahoadon),
                    passcode: (this.form.passcode)
                }
                let a = encode(JSON.stringify(ob), ts)
                console.log(a)
                let url = 'https://einvoice.trinhminhbao.workers.dev/gethoadon'
               // url = 'http://localhost:8787/gethoadon'
             fetch(url, {
                    method: "POST",
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
                        'cf-authorization': `${encode('baotm', ts)}`,
                        'cf-timestamp': ts,
                        'content-type': 'text/html'
                    },
                    body: a,
                }).then(data => data.json()).then(data => {

                    if (data.length > 0) {
                        this.form = {
                            mahoadon: null,
                            passcode: null
                        }
                  //      console.log(data[0])
                        this.dataHoadon = data[0]
                        this.$bvModal.show('modalChitiet')
                    } else {
                        this.msg = "Mã hóa đơn hoặc passcode sai"
                    }
                })
            }

        },
        async sendEncodedData(url, data) {
            const encodedInfo = encode(JSON.stringify(data));
            let d = new Date().getTime()
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.encode(d)}`,
                        'Authorization-timestamp': d
                    },
                    body: JSON.stringify({ info: encodedInfo })
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const responseData = await response.json();
                return responseData;
            } catch (error) {
                console.error('Có lỗi khi gửi dữ liệu:', error);
                throw error;
            }
        }

    }
}
</script>
<style>
.r:hover {
    cursor: pointer;
    color: red
}

.tblWidth20 {
    width: 50%;
    max-width: 50%;
    font-weight: bold;
}

.tblWidthBot {
    border-bottom: 1px dotted black;
    ;
}
</style>