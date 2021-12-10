
const assetsSystem = document.getElementById("assetsSystem");
const loadingText = document.getElementById("loadingText");
const startText = document.getElementById("startText");
const homeLoading = document.getElementById("homeLoading");



assetsSystem.addEventListener("loaded", ()=>{

    loadingText.remove();
    console.log("loaded");

    startText.setAttribute("style","display: block");

    startText.addEventListener("click", ()=>{


            homeLoading.remove();

    })

});

/*

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3Metamask = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/3be8ee0f25324e1cbcf6e35f00f5b3ce"
  );
  web3Metamask = new Web3(provider);
}

*/

const levelRebirth = document.getElementById("levelRebirthSRC");
const memoriasConfusas = document.getElementById("memoriasConfusasSRC");
const hydraCanvasSam = document.getElementById("hydraCanvasSam");
const camera = document.getElementById("camera");



document.addEventListener('keydown', e => {

    switch (e.keyCode) {

        case 27:
            levelRebirth.style.display = 'none';
            levelRebirth.pause();
            levelRebirth.currentTime = 0;
            levelRebirth.load();

            memoriasConfusas.style.display = 'none';
            memoriasConfusas.pause();
            memoriasConfusas.currentTime = 0;
            //memoriasConfusas.load();

            hydraCanvasSam.style.display = 'none';

            camera.setAttribute("look-controls","enabled:true");
            camera.setAttribute("wasd-controls","enabled:true");
          break;

    }


});

var scale = window.devicePixelRatio;
var size = 1000;
var c = document.getElementById("hydraCanvasSam");
c.width = Math.floor(size * scale);
c.height = Math.floor(size * scale);

// create a new hydra-synth instance
var hydraSam = new Hydra({
  canvas: document.getElementById("hydraCanvasSam")
});

osc(0.1,0.1,15).scale([3,3.5,3.8].smooth()).color(100,1,1,).contrast(10)
.shift(.2,3,.2).colorama(0.05).luma(.1,.1).out()
  
  
  
  AFRAME.registerComponent('wireframe', {
    schema: {
      analyserEl: {type: 'selector'},
    },
  
    init: function (){
      var analyserEl = this.data.analyserEl || this.el;
      //var componentes = analyserEl.components.audioanalyser;
      //console.log(componentes);
  
      this.el.addEventListener('model-loaded', () => {
      
      
        var modelo = this.el.getObject3D('mesh');
        var modeloMaterial = modelo.children[0].material;
    
        modeloMaterial.wireframe = true;
      
   
      })
    }
    
  });
  
  AFRAME.registerComponent('bothsides', {
    schema: {
      analyserEl: {type: 'selector'},
    },
  
    init: function (){
      const analyserEl = this.data.analyserEl || this.el;
        
      this.el.addEventListener('model-loaded', async () => {
        const modelo = await this.el.getObject3D('mesh');
        try{
  
        const modeloMaterial = modelo.children[0].material;
        modeloMaterial.side = THREE.DoubleSide;
        
        let flag= false;
  
        if(modeloMaterial.side === 2){
          
          
        flag=true
      }
        
        console.log("Bothsides activo", flag);
  
      } catch(e) {return console.log(e)}
  
      });
    }
    
  });
  
  AFRAME.registerComponent('color', {
    schema: {
      analyserEl: {type: 'selector'},
    },
  
    init: function (){
      const analyserEl = this.data.analyserEl || this.el;
        
      this.el.addEventListener('model-loaded', async () => {
        const modelo = await this.el.getObject3D('mesh');
        try{
  
        const modeloMaterial = modelo.children[0].material;
        modeloMaterial.color.setHex(0x0000FF);
        
        console.log("Color activo");
  
      } catch(e) {return console.log(e)}
  
      });
  
    }
    
  });
  
  AFRAME.registerComponent('draw-canvas', {
    schema: {default: ''},
  
    init: function () {
      this.canvas = document.getElementById(this.data);
      this.ctx = this.canvas.getContext('webgl');
  
      // Draw on canvas...
  
      // Emmanuel Martínez
  
    document.querySelector('a-scene').addEventListener('loaded', function () {
    
      
      hydra = new Hydra({
        canvas: hydraCanvas,
        enableStreamCapture: false,
        detectAudio: false,
        width: 512,
        height: 512,
      });
      
      
      /*Emmanuel Martínez
     
      s0.initCam()
  
  src(s0).scrollX(1,-0.2).out(o0)
  
  src(s0).scale([0.8,1,0.6].fast(1)).scrollX(10,0.2).out(o1)
  
  src(s0).scale(0.3).scrollY(0.2,0.2).out(o2)
  
  src(s0).out(o3)
  
  render()
  
  
      */
  
  /*
  ////OBSERVAR EL ORIGEN by SAMMTZA - CutOutFest 2021
  
  //latente transmutacion
  s0.initVideo('./videos/latentSpace.mp4')
  
  //el pensamiento es una orbe
  seno = (amp=1,ph=0,freq=0.3) => Math.sin(time*freq+ph)*amp
  rand = (min=0,max=1) => Math.random()*(max-min)+min
  forma = (s=1,a=0,ph=0,y=0) => shape(64,s,0.05).scroll(()=>seno(a,ph),y)
  let fuente = solid(0,0,0,0)
  let cant = 128
  let ciclo = 1/cant
  let size = 0.25
  for(i=0;i<cant;i++){
    y = ciclo*i*3
    fuente=fuente.add(
      forma(.02,Math.sin(y)*size,rand(0,Math.PI*3),Math.cos(y)*size)
    )
  }
  fuente = fuente.luma(()=>mouse.y*0.0000001,0.01)
    .colorama(()=>-0.004+mouse.x*0.0005)
  .saturate(()=>mouse.x*0.1)
  
  //render
  solid()
    .layer(fuente)
   .scale(()=>.8+mouse.y*0.01075)
    .rotate(()=>mouse.x*0.005,0.01)
  .out()
  
  //dividir entre 2 si no alcanza a correr bien
  setResolution(innerWidth/1,innerHeight/1)
  
  //monstruo borbotea entre dimensiones
  shape(64).luma()
  .diff(osc(2,.3,2).posterize(4,2))
  .modulateScale(noise(()=>3.2+Math.cos(time)*.00255,.08))
  .scale(()=>1.2+Math.sin(time*.1)*Math.cos(time*1)*.25,1.6)
  .rotate(0.08,.06).scale(1.05)
  .mult(noise(1.3,.03).brightness(0.3).scale(1.5),.1)
  .contrast(1.5)
  .saturate(()=>mouse.x*0.05)
    .layer(src(o3).mask(gradient([4,6,1.6,2,4].ease("linear"),.001).luma(0.0001,0.01).scale(1.3),.1))
  .luma([.5,.5,.5,.5,.5,0,0,0].ease("easeInOutQuint"))
  .out(o3)
  
    //neuronas zwei
    setFunction({
      name: 'notargsGlsl',
      type: 'src',
      inputs: [],
      glsl: `
    vec3 d=.5-vec3(_st.xy*2500.0,1.0)/1000.0,p;
    for(int i=0;i<32;i++){vec3 q=p;
    q.z-=time*5.0;float a=q.z*.1;q.xy *= mat2(cos(a),sin(a),-sin(a),cos(a)); q= vec3(.1-length(cos(q.xy)+sin(q.yz)));
    p+=q*d;}
    return vec4((vec3(sin(p))+vec3(2.0,5.0,9.0))/length(p),1.0);
    `})
  
  
  notargsGlsl()
  .rotate(()=>mouse.x*-0.005,-.3)
    .layer(src(s0).rotate(()=>mouse.y*0.005,.3
  ).scale(()=>0.45+mouse.x*0.0025)
  .scale(1.3)
  .scroll(-0.05,-.05)
  .luma([.1,.15,.2,.25,.3,.25,.2,.15].ease("easeInOutQuint"),.01)
   .contrast(1.3)
   .hue(()=>(time)/3))
  .saturate(1.3)
   .hue(()=>(time)/3)
    .out(o1)
  
  render(o2)
  */
  
  osc(0.1,0.1,15).scale([3,3.5,3.8].smooth()).color(100,1,1,).contrast(10)
  .shift(.2,3,.2).colorama(0.05).luma(.1,.1).out()
  
  
  
    
    });
    }
  });
  
  AFRAME.registerComponent("canvas-updater-primitives", {
    
    tick: function() {
      var el = this.el;
      var material;
  
    material = el.getObject3D("mesh").material;
      if (!material.map) {
        return;
      }
      material.map.needsUpdate = true;
  
    
    }
  });
  
  AFRAME.registerComponent('raycaster-obras', {
      schema: {
          video: {type: 'selector'},
          visible: {type: 'selector'},
          fullscreen: {type: 'selector'},
        },
    
      init: function () {
  
      const el= this.el;
  
      const videoToPlay = this.data.video;
      const videoVisible = this.data.visible;
      const videoFullscreen = this.data.fullscreen;
      
      console.log("Video a correr", videoToPlay);
      console.log("Video Visibilidad", videoVisible);
      console.log("Fullscreen video", videoFullscreen);
  
        this.el.addEventListener('mouseenter', ()=> {
          console.log("Mouse Enter")
          videoToPlay.play();
          
          videoVisible.setAttribute("visible","true");
          el.setAttribute("visible","false");
          
  
        });
  
        this.el.addEventListener('mouseleave', ()=> {
  
          videoToPlay.pause();
  
          console.log("Mouse Exit")
          videoVisible.setAttribute("visible","false");
          el.setAttribute("visible","true");
          
          videoToPlay.currentTime = 0;
          videoToPlay.load();
          
  
        });

        this.el.addEventListener('click', ()=> {
            
            camera.setAttribute("look-controls","enabled:false");
            camera.setAttribute("wasd-controls","enabled:false");
            videoFullscreen.play();
            videoFullscreen.setAttribute("style","display:block");
            
    
          });
      
      }
  
    });

    AFRAME.registerComponent('raycaster-eth', {

    
      init: function () {
  
      const el= this.el;
      const ipAPI = '//api.ipify.org?format=json';

  

        this.el.addEventListener('click', async ()=> {


            


          const inputValue = fetch(ipAPI)
            .then(response => response.json())
            .then(data => data.ip)
            .then(()=>{
              console.log("Puja puesta")

            })

          const { value: ipAddress } = await Swal.fire({
            title: 'Pon tu oferta',
            input: 'text',
            inputLabel: 'Tu oferta debe estar en Ether',
            inputValue: inputValue,
            showCancelButton: true,
            inputValidator: (value) => {
              if (!value) {
                return 'No has puesto nada'
              }
            }
          })
          
          if (ipAddress) {
            Swal.fire(`Tu puja es de ${ipAddress} ETH`)
          }
    
          });
      
      }
  
    });

    AFRAME.registerComponent('raycaster-hydra', {

    
      init: function () {
  
      const el= this.el;

        this.el.addEventListener('click', ()=> {
          hydraCanvasSam.style.display = "block"
    
          });
      
      }
  
    });
  
    AFRAME.registerComponent('look-at-cam', {

    
      init: function (){

        const el = this.el;
        const camera = el.sceneEl.camera;
        const cameraPosition = el.sceneEl.camera.position;
        const cameraRotation = el.sceneEl.camera.rotation;
          
      },
    
      tick: function(){
            
            const cameraPosition = this.el.sceneEl.camera.el.getAttribute('position');
            const cameraRotation = this.el.sceneEl.camera.el.getAttribute('rotation');

            console.log("Cam position", cameraPosition.y);
            console.log("Cam rotation", cameraRotation.y);
    /*
            const rigPosition = rigCamera.getAttribute('position');
            const rigRotation = rigCamera.getAttribute('rotation');
    
            console.log("Cam position", cameraPosition);
            console.log("Cam rotation", cameraRotation);
    
            */
    
      }
      
    });

    AFRAME.registerComponent('floor-locked', {

      tick: function(){

        const cameraPosition = this.el.sceneEl.camera.el.getAttribute('position');
        
        if (cameraPosition.y < 0){

          //camera.setAttribute("look-controls","enabled:false");
          camera.setAttribute("wasd-controls", "acceleration:0");
          //console.log("Piso");

          cameraPosition.y = 0.8;

      }

      if (cameraPosition.y == 0.8){

        //camera.setAttribute("look-controls","enabled:false");
        camera.setAttribute("wasd-controls", "acceleration:750");

    }


  }

      
    });
  
  

