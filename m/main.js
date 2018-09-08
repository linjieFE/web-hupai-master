;(function(){
  let getEles = document.querySelectorAll.bind(document),
      getElem = document.querySelector.bind(document),
      _menuLen = getEles(".m_main_menu li"),
      _conLen = getEles(".tabCon")
  let index = this.index || 0 ;

 let _playEvent = {

    tabEvent: function(){
      let _self = this;
      [].forEach.call(_menuLen, (val, index) => {
          
          val.addEventListener("click", e =>{
            console.log(val);
             val.classList.add("curr")
              _self.removeCon();
              _self.removeCurrent();
              _conLen[index].style.display = "block";
          });
      });
    },
    removeCurrent:function(){
      let _self = this;
      [].forEach.call(_menuLen,(val,index)=>{
          val.classList.remove("curr");
      })
    },
    removeCon: function() {
        [].forEach.call(_conLen, function(val, index) {
            //console.log(val)
            val.style.display = "none";
        });
    },
    init:function(){
      this.tabEvent(),
      this.removeCurrent(),
      this.removeCon()
    }
 }
 _playEvent.init()

})()