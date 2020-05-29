</div>
    <img id="img1" class="carousel-left-img absolute rounded-chart" src="assets/img/Covid/1.jpg">
    <img id="img2" class="carousel-middle-img absolute rounded-chart" src="assets/img/Covid/2.jpg">
    <img id="img3" class="carousel-right-img absolute rounded-chart" src="assets/img/Covid/3.jpg">

    <div class="carousel relative mt-30 mb-30 row w-100">
      <!-- Left button -->
      <div class="carousel-button relative white button-left">
        <i id="carousel-button-left" class="fas fa-chevron-left absolute">        
        </i>
      </div>
      <!-- Left card -->
        <div id="carousel-left" class="rounded-chart col-lg-4 shadow relative">
          <div class="overlay rounded-chart absolute">
            <h3 class="carousel-content white absolute"><b>Protegerte</b> y protegernos</h3>
          </div>
        </div>
      <!-- Middle card -->
      <div id="carousel-middle" class="rounded-chart col-lg-4 shadow relative">
        <div class="overlay rounded-chart absolute">
          <h3 class="carousel-content white absolute"><b>Protegerte</b> y protegernos</h3>
        </div>
      </div>
      <!-- Right card -->
      <div id="carousel-right" class="rounded-chart col-lg-4 shadow relative">
        <div class="overlay rounded-chart absolute">
          <h3 class="carousel-content white absolute"><b>Protegerte</b> y protegernos</h3>
        </div>
      </div>
      <!-- Right button -->
      <div class="carousel-button relative white button-right">
       <i id="carousel-button-right" class="fas fa-chevron-right absolute">        
        </i>


if(currentImage >= (images.length-1)){
    preImage=currentImage-7;
    middle.src = (images[preImage+1]);

    }else{
    middle.src = (images[currentImage+1]);

}


if(currentImage <= 4){
    right.src = (images[currentImage+2]);
}else{
    lastImage=currentImage-6;
    right.src = (images[lastImage+1]);

}