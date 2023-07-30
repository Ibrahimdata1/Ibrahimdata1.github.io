const product = [
    {
        image:'/src/images/pic7.jpg',
        name: 'Engine-MAX',
        engine:' DOHC 1,133cc V-twin engine and new-school multipiece aluminum frame,',
        speed:'speed through a turn, the chassis provides excellent feedback and allows for midcorner inputs without the worry of losing composure',
        weight:'The Engine-MAX weighs around 188 kg (414 lbs)',
        fuel:'The fuel tank capacity of the Engine is 13 litres'
    },
    {
        image:'/src/images/pic5.jpg',
        name: 'Riscoz-JET',
        engine:' The Riscoz-JET is a 689cc sport bike. Its 4-stroke parallel twin engine has a power output of 54 kW and torque output of 49 ft-lb.',
        speed:'The maximum speed of the Yamaha R7 motorcycle is around 140 mph (225 km/h)',
        weight:'The Engine weighs around 188 kg (414 lbs)',
        fuel:'The fuel tank capacity of the Yamaha R7 is 13 litres'
    },
    {
        image:'/src/images/pic4.jpg',
        name: 'SBZ-Vintage',
        engine:' The SBZ-Vintage is a 689cc sport bike. Its 4-stroke parallel twin engine has a power output of 54 kW and torque output of 49 ft-lb.',
        speed:'The maximum speed of the Yamaha R7 motorcycle is around 140 mph (225 km/h)',
        weight:'The Sbz weighs around 188 kg (414 lbs)',
        fuel:'The fuel tank capacity of the Engine is 13 litres'
    },
    {
        image:'/src/images/pic6.jpg',
        name: 'Tiger-TURBO',
        engine:' DOHC 1,133cc V-twin engine and new-school multipiece aluminum frame,',
        speed:'speed through a turn, the chassis provides excellent feedback and allows for midcorner inputs without the worry of losing composure',
        weight:'The Engine-MAX weighs around 188 kg (414 lbs)',
        fuel:'The fuel tank capacity of the Engine is 13 litres'
    },
    {
        image:'/src/images/pic1.jpg',
        name: 'Engine-MAX',
        engine:'  The Aprilia is powered by a V-4, the KTM a V-twin, and the Yamaha an inline-four',
        speed:'six-speed gearbox. On the Cycle World dyno, the Yamaha produced 134.5 hp at 10,900 rpm and 74.5 lb.-ft.',
        weight:'The lightest machine is the Aprilia at 470 pounds,',
        fuel:'The fuel tank capacity of the Tiger-Trubo is 10 litres'
    },
    {
        image:'/src/images/pic2.jpg',
        name: 'Buffalo-MAX',
        engine:' Both models feature standard full-size off-road wheels with 21-inch fronts and 18-inch rears, providing an abundance of aftermarket tire options.',
        speed:'five-speed transmission (working through a 13/50 final drive sprocket combo)',
        weight:'weight on the front end. When hitting fast sections with large bumps, whoops',
        fuel:'The fuel tank capacity of the Yamaha R7 is 13 litres.'
    },
    {
        image:'/src/images/pic3.jpg',
        name: 'G-MAX',
        engine:' Both models feature standard full-size off-road wheels with 21-inch fronts and 18-inch rears, providing an abundance of aftermarket tire options.',
        speed:'five-speed transmission (working through a 13/50 final drive sprocket combo',
        weight:'The Engine-MAX weighs around 188 kg (414 lbs)',
        fuel:'weight on the front end. When hitting fast sections with large bumps, whoops, '
    },
    {
        image:'/src/images/car2.jpg',
        name: 'Isx-244',
        engine:' DOHC 1,133cc V-twin engine and new-school multipiece aluminum frame,',
        speed:'speed through a turn, the chassis provides excellent feedback and allows for midcorner inputs without the worry of losing composure',
        weight:'The Engine-MAX weighs around 188 kg (414 lbs)',
        fuel:'The fuel tank capacity of the Engine is 13 litres'
    },
    {
        image:'/src/images/car1.jpg',
        name: 'Ssbz-645',
        engine:'Both models feature standard full-size off-road wheels with 21-inch fronts and 18-inch',
        speed:'speed through a turn, the chassis provides excellent feedback and allows for midcorner inputs without the worry of losing composure',
        weight:' weight on the front end. When hitting fast sections with large bumps, whoops, or jumb',
        fuel:'The fuel tank capacity of the Engine is 13 litres'
    },
    {
        image:'/src/images/truck2.jpg',
        name: 'BIG-TanK',
        engine:' DOHC 1,133cc V-twin engine and new-school multipiece aluminum frame,',
        speed:'speed through a turn, the chassis provides excellent feedback and allows for midcorner inputs without the worry of losing composure',
        weight:'The BIG-Tank weighs around 534 kg (414 lbs)',
        fuel:'The fuel tank capacity of the Engine is 93 litres'
    },
    {
        image:'/src/images/truck1.jpg',
        name: 'Super-Tank',
        engine:'  Both models feature standard full-size off-road wheels with 21-inch fronts and frame,',
        speed:'speed through a turn, the chassis provides excellent feedback and allows for midcorner inputs without the worry of losing composure',
        weight:'The Super-Tank weighs around 534 kg (414 lbs)',
        fuel:'The fuel tank capacity of the Engine is 93 litres'
    },
    {
        image:'/src/images/super1.jpg',
        name: 'Shark-z',
        engine:' DOHC 1,133cc V-twin engine aBoth models feature standard full-size off-road wheels with 21-inch fronts,',
        speed:'speed through a turn, the chassis provides excellent feedback and allows for midcorner inputs without the worry of losing composure',
        weight:'The BIG-Tank weighs around 534 kg (414 lbs)',
        fuel:'The fuel tank capacity of the Engine is 93 litres'
    },
    {
        image:'/src/images/super2.jpg',
        name: 'Premium-790z',
        engine:' DOHC 244cc V-twin engine aBoth models feature standard full-size off-road wheels with 21-inch fronts,',
        speed:'speed through a turn, the chassis provides excellent feedback and allows for midcorner inputs without the worry of losing composure',
        weight:'The 790z weighs around 854 kg ',
        fuel:'The fuel tank capacity of the Engine is 23 litres'
    },
    {
        image:'/src/images/super3.jpg',
        name: 'Auto-Engine-236x',
        engine:' AVWS 244cc V-twin engine aBoth models feature standard full-size off-road wheels with 21-inch fronts,',
        speed:'speed through a turn, the chassis provides excellent feedback and allows for midcorner inputs without the worry of losing composure',
        weight:'The 236x weighs around 560 kg',
        fuel:'The fuel tank capacity of the Engine is 63 litres'
    },
]
let showpic = document.querySelector('.superContainer')
let blank = ''
for(i=0;i<product.length;i++){
    let data = product[i]
    blank += `<div class="container my-3">
        <div class="container px-4 py-5 border rounded-3 shadow-lg h-100">
          <div class="row flex-lg-row-reverse align-items-center g-5 pt-2 pt-lg-4 px-lg-3">
            <div class="col-12 col-lg-6 px-2 px-lg-0 mb-3 mt-0">
                <img
                  src="${data.image}"
                  class="d-block mx-lg-auto img-fluid rounded-2"
                  alt="Bootstrap Themes"
                  loading="lazy"
                />
            </div>
            <div class="col-lg-6 py-0 my-0 ps-lg-0" id='checkName'>
              <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-2 car--name">
                ${data.name}
              </h1>
              <p class="lead">
               <h5><u>Specification</u></h5>
               <p><b>Engine Specifications</b>
                ${data.engine} <br><br>
    
                <b>Top Speed & Horsepower</b>
                ${data.speed}<br><br>
    
                <b>Weight & Seat Height</b>
                ${data.weight}<br><br>
    
                <b>Fuel Consumption</b>
                ${data.fuel}</p>
    
              </p>
              <div class="d-flex flex-row bd-highlight mb-3 gap-4">
                <div class="p-10 bd-highlight d-flex gap-2 align-items-center">
                 <i class="bi bi-fuel-pump-diesel-fill text-danger"></i>
                    <p class="mt-3">Diesel Power</p>
                </div>
                <div class="p-10 bd-highlight d-flex gap-2 align-items-center">
                 <i class="bi bi-ev-front-fill text-success"></i>
                    <p class="mt-3">Car EV Energy</p>
                </div>
                <div class="p-10 bd-highlight d-flex gap-2 align-items-center">
                 <i class="bi bi-person-fill-gear text-warning"></i>
                    <p class="mt-3">Personal Customize</p>
                </div>
              </div>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start">
    
                  <a href="shoppingCart.html" class="btn btn-outline-success btn-lg px-4 me-md-2" role="button" >
                    Checkout
                  </a>
                <a href="index.html" class="btn btn-secondary d-flex align-items-center justify-content-center opacity-75" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" role="button">
                   Go Back Home
                </a>
    
              </div>
            </div>
          </div>
        </div>
        </div>`
}
showpic.innerHTML = blank
