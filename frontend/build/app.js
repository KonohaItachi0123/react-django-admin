var RDA=this.RDA||{};RDA.Config={API_URI:"http://localhost:5000",API_KEY:"U3DVW32BC431Y9IOIVXCSY212UIJH8",CLIENT_ID:"<YOUR_CLIENT_ID>",CLIENT_SECRET:"<YOUR_CLIENT_SECRET>",STORAGE_ID:"RDA_LOCALSTORAGE"};var RDA=this.RDA||{};RDA.API={getUserById:function(e){$.ajax({type:"POST",url:app.Config.API_URI+"/api/v1/user/get_profile/"+e.userid,success:e.success,beforeSend:function(e,t){e.setRequestHeader("Authorization","Bearer "+app.user.attributes.access_token)},data:{api_key:app.Config.API_KEY},error:e.error,dataType:"json"})}};var RDA=this.RDA||{};RDA.Views=RDA.Views||{};var RDARouter=Backbone.Router.extend({initialize:function(){var e=Backbone.Model.extend({localStorage:new Backbone.LocalStorage(RDA.Config.STORAGE_ID),defaults:function(){return{id:1,access_token:null,data:{}}}});this.user=new e,this.user.fetch()},routes:{refresh:"refresh",hello:"hello",settings:"settings","users/:userid":"usersettings",users:"users","password/:userid":"password",password:"password","*actions":"defaultRoute"}});_.defaults(RDARouter.prototype,{Config:RDA.Config,API:RDA.API,Views:RDA.Views});var app=new RDARouter;app.on("route:users",function(e){this.user.attributes.access_token?app.Views.renderUsersView():this.navigate("/",{trigger:!0})}),app.on("route:settings",function(){this.user.attributes.access_token?app.Views.renderSettingsView():this.navigate("/",{trigger:!0})}),app.on("route:usersettings",function(e){this.user.attributes.access_token?app.Views.renderUserSettingsView(e):this.navigate("/",{trigger:!0})}),app.on("route:password",function(e){this.user.attributes.access_token?app.Views.renderChangePasswordView(e):this.navigate("/",{trigger:!0})}),app.on("route:refresh",function(e){this.user.attributes.access_token?app.Views.renderEmptyView():this.navigate("/",{trigger:!0})}),app.on("route:hello",function(e){this.user.attributes.access_token?app.Views.renderHelloView():this.navigate("/",{trigger:!0})}),app.on("route:defaultRoute",function(e){this.user.attributes.access_token?this.navigate("/",{trigger:!0}):app.Views.renderLoginView()});
//# sourceMappingURL=app.js.map
