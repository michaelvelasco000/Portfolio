import frontImage from '../assets/frontpage.png';
import Atropos from 'atropos/react';

function Landingpage(){
    return(
        <>
        <div className="container-fluid defaultbg2" id='home'>
            <div className="row  defaultrow">
                <div className="col-12  position-relative">
                <Atropos 
                shadowScale={0}
                shadow={false} 
                shadowOffset={0}
                highlight={false}
                className="my-atropos position-absolute top-50 start-50  translate-middle" style={{width:'100%'}}>
                       <div class="confetti-container z-1">
                            <div class="confetti"></div>
                            <div class="confetti"></div>
                            <div class="confetti"></div>
                            <div class="confetti"></div>
                            <div class="confetti"></div>
                            <div class="confetti"></div>
                            <div class="confetti"></div>
                            <div class="confetti"></div>
                            <div class="confetti"></div>
                            <div class="confetti"></div>
                        </div>
                <h1 className="text-white text-center " style={{ width:'100%  ', fontFamily: 'Darlothes Grunge', fontSize: '40vw' }}>4rian</h1>
              </Atropos>
                 
                    <h1><img src={frontImage} alt="" className='lpimg position-absolute top-50 start-100  translate-middle z-2'/></h1>
                    
                </div>
            </div>
            
        </div>  
       
        </>
  
    )
   
}
export default Landingpage;