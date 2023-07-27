<template>
    <div class="mainBody">
        <div class="wapper" v-loading="loading"
        element-loading-text=" 登陆中，请稍等"
         element-loading-spinner="el-icon-loading"
         element-loading-background="rgba(0, 0, 0, 0.8)">
                <div class="signMain">
                    <div class="signHeader" @click="toMain">
                            <a class="logo" ></a>
                            <div class="title">{{this.$webText.Login_Title}}</div>
                    </div>
                    <div class="signBody">
                           <div class="signRow">
                               <div class="signTextBox el-icon-user-solid"  :class="{signTextBoxFocus:curTextFocus=='account'}">
                                   <input class="signText signTextVC" :placeholder="this.$webText.Reg_Account" type="text" 
                                   v-model="formdata.account" 
                                   @focus="textFocus('account')">
                              </div>
                              <div class="signRowMsg" v-show="this.errorMsg.account!=''">{{this.errorMsg.account}}</div>
                           </div>

                           <div class="signRow">
                               <div class="signTextBox el-icon-lock"  :class="{signTextBoxFocus:curTextFocus=='pwd'}"> 
                                   <input class="signText" :placeholder="this.$webText.Reg_Pwd" 
                                   v-model="formdata.pwd" 
                                   @focus="textFocus('pwd')"  type="password">
                             </div>
                             <div class="signRowMsg" v-show="this.errorMsg.pwd!=''">{{this.errorMsg.pwd}}</div>
                           </div>
                           <!-- <div class="signRow">
                               <div class="signTextBox icon iconfont icon-shouji"  :class="{signTextBoxFocus:curTextFocus=='phone'}">
                                   <input class="signText" :placeholder="this.$webText.Reg_Phone" 
                                   v-model="formdata.phone" 
                                   type="tel" @focus="textFocus('phone')">
                              </div>
                              <div class="signRowMsg" v-show="this.errorMsg.phone!=''">{{this.errorMsg.phone}}</div>
                           </div> -->
                            <!-- <div class="signRow" v-show="this.formdata.phone!=''">
                               <div class="signTextBox icon iconfont icon-yanzhengma"  :class="{signTextBoxFocus:curTextFocus=='SMSVC'}">
                                   <input class="signText signTextVC" :placeholder="this.$webText.Reg_SMSVC" 
                                   v-model="formdata.smsVC" 
                                   type="text" @focus="textFocus('SMSVC')">
                                   <el-button class="signVerifyCodebtn" :disabled="this.count>0" type="success" size="medium" round @click="getVerifyCode">
                                        {{this.getVCText()}}
                                   </el-button>
                              </div>
                              <div class="signRowMsg" v-show="this.errorMsg.smsVC!=''">{{this.errorMsg.smsVC}}</div>
                           </div>       -->
                    </div>
                    <div class=signFooter>
                       <div style="padding-bottom:30px">
                           <el-button class="signSubmit" type="primary"  @click="submitLogin">
                               {{this.$webText.Login_BtnText}}
                           </el-button>
                              <el-link icon="el-icon-edit" type="danger" @click="toReg" class="btnToReg"  :underline="false">{{this.$webText.Login_BtnToReg}}</el-link>
                        </div>
                              <el-divider >{{this.$webText.Reg_3Part}}</el-divider>
                              <div class="partThreeButtons">
                                    <div class="icon iconfont icon-weixin"></div>
                              </div>
                              
                    </div>
            </div>
        </div>
      
    </div>
</template>
<style scoped>
.mainBody{
    background-color: #E0E4E8;
    /* height: 100vh; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
    padding-top: 40px;
}
.wapper{
   border-radius: 8px;
    background-color: white;
    margin:auto auto;
    width: 420px; 
    min-height: 600px;
}
.signMain{
    min-height: 500px;
    padding: 50px 30px;
    display: flex;
    flex-direction: column;
}
.signHeader{
    display: flex;
     justify-content: center;
    
     /* margin-top: 20px; */
}
.signHeader .logo{
    display:inline-block;
    height: 80px;
    width: 100px;
    background: url('/Images/TX_Logo_100.png')  no-repeat;
    background-size: 80px 80px;
}
.signHeader .title{
    align-self:center;
    font-size: 20px;
    font-weight: 700; 
    font-family: "PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑" !important; 
}

.signBody{
    /* justify-content: center; */
    padding-top: 40px;
    padding-bottom: 10px;
    display: flex;
    /* justify-content: space-evenly; */
    /* background-color: turquoise; */
    flex-grow: 1;
    flex-direction: column;

}
.signRow{
    display: flex;
    height: 72px;
    flex-direction: column;

}

 .signRow .signTextBox{
     color: rgba(136, 135, 135, 0.6);
    font-size: 26px;
    align-self: center;
      width: 100%;
    border-bottom: solid 1px #999999;

}
.signSubmit{
    width: 100%;
}
.signText{
    min-height: 40px;
    width: 80%;
    border:none;
    outline: none;
    padding-left:15px;
    font-size: 16px;
    font-weight: 700;
    font-family: "-apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif";
}
 .signTextVC{
        width:216px;
    }

.signTextBoxFocus{
    border-bottom: solid 1px #409EFF !important;
    color: #409EFF !important;
}
.signRowMsg{
    padding-top: 5px;
    color: #EC7E6B;
}
.signRowMsg::before{
    content: "* ";
}

.signVerifyCodebtn{
    vertical-align: top;
    width: 100px;
}

.signFooter{
    /* background-color: yellow; */
    /* height: 130px; */
}
.partThreeButtons{
    display: flex;
    justify-content: center;
    cursor: pointer;
   
}
.icon-weixin{
 font-size: 40px;
 color: #49C000;
}
.btnToReg{
    float: right;
    padding :20px 0px;
}

@media (max-width:768px) 
{
    .wapper{
      width: 360px;
    }
    .signTextVC{
        width:150px;
    }
 
}
</style>
<script>
import {vTools} from '@/utility/vTools';
export default {
    data(){
        return {
            loading:false,
            count:0,
            errorMsg:{
                account:"",
                pwd:"",
                // phone:"",
                // smsVC:""
            },
            curTextFocus:"",
            formdata:{
                account:"",
                pwd:"",
                // phone:"",
                // smsVC:""
            }
        }
    },
    methods:{
        toReg(){
            this.$Pagers.toRegister();
         //   this.$router.push('/User/Register');
        },
        toMain(){
               this.$Pagers.toMain();
        },
        submitLogin(){
        //    debugger;
        var that = this;
             if(this.verifyFields())
             {
                    this.loading = true;
                    this.clearErrMsg();
                    this.$ccApi.post(this.$ccUrls.User_Login,this.formdata,
                            s=>{
                                //    that.$message({message: this.$webText.Login_Success,type: 'success' });
                                //    debugger
                                    this.$store.dispatch('userLogin',
                                    {
                                        "user":s.Entity.UerInfo,
                                        "isNewExpire":true,
                                        "msgOverview":s.Entity.MsgOverview
                                    });
                                    that.$Pagers.toMain();
                            },
                            f=>{
                                    that.$msg.error(f.ErrorMsg);    
                            },
                            e=>{
                                     that.loading = false;
                            }

                    );
             }
        
        },
        verifyFields(){
         //   var that = this;
            this.errorMsg.account = vTools.verifyAccount(this.formdata.account);
            if(this.errorMsg.account) {
                 this.$msg.error(this.errorMsg.account);
                 return false;
            }
            this.errorMsg.pwd = vTools.verifyPwd(this.formdata.pwd);
            if(this.errorMsg.pwd) {
                this.$msg.error(this.errorMsg.pwd);
                 return false;
            }

        //     this.errorMsg.phone = vTools.verifyPhone(this.formdata.phone);
        //     if(this.errorMsg.phone) {
        //          this.$message.error(this.errorMsg.phone);
        //          return false;
        //     }
        //  //   debugger
        //      this.errorMsg.smsVC = vTools.verifyVC(this.formdata.smsVC);
        //     if(this.errorMsg.smsVC) {
        //          this.$message.error(this.errorMsg.smsVC);
        //          return false;
        //     }
            return true;
        },
        textFocus(curText){
            this.curTextFocus = curText 
            if(curText == "account" ) this.errorMsg.account = "";
            if(curText == "pwd") this.errorMsg.pwd = "";
            if(curText == "phone") this.errorMsg.phone = "";
            if(curText == "smsVC") this.errorMsg.smsVC = "";
        },
        clearErrMsg(){
                for(let key in this.errorMsg)
                {
                    this.errorMsg[key] ="";
                }
        }
    }
}
</script>