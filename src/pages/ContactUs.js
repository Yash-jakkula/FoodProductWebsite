
import React from "react";

const ContactUs = ()=>{

    const [name,setName] = React.useState()
    const [email,setEmail] = React.useState()
    const [queries,setQueries] = React.useState()

    const con = () => {
        console.log("values",name,email,queries);
        const ownerPhoneNumber = '7036987151';
        if(name && email && queries ){
        const message = `User Details:\nName: ${name}\nemail: ${email}\nquery: ${queries}`;
     
        const whatsappLink = `https://wa.me/${ownerPhoneNumber}?text=${encodeURIComponent(message)}`;
    // Opening WhatsApp
    window.open(whatsappLink, '_blank');
        }
        else{
            alert("enter all the details");
        }
    }
    return(
        <>
            <div className="row mt-5 d-flex justify-content-center align-items-center">
                <div className="col-md-6 container d-flex justify-content-center">
                    <div style={{width:'50%'}}>
                    <img className="contactusimg" src="/contactus.png" alt="contactusimage" style={{width:"100%",height:'100%',position:'relative'}}/>
                    <img style={{position:'absolute',color:'white',bottom:'30%',left:'15%',width:'20%'}} src="/textcopy.png" />
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="row d-flex gap-4" style={{width:'50%'}}>
                        <div className="col-md-6" style={{width:'100%',display:'flex',justifyContent:'center'}}>
                            <span style={{fontWeight:'600',fontSize:'20px'}}>ContactUs</span>
                        </div>
                        <div className="col-12">
                            <input onChange={(event)=>setName(event.target.value)} style={{paddingLeft:'10px',width:"100%",height:'50px',borderRadius:'10px',borderColor:'#004AAD66'}} type="text" placeholder="Enter Your name"/>
                        </div>
                        <div className="col-12">
                            <input onChange={(e)=>setEmail(e.target.value)} style={{paddingLeft:'10px',width:'100%',height:'50px',borderRadius:'10px',borderColor:'#004AAD66'}} type="text" placeholder="Enter Your Email"/>
                        </div>
                        <div className="col-12">
                            <textarea onChange={(e)=>setQueries(e.target.value)} style={{paddingLeft:'10px',width:'100%',borderRadius:'10px',borderColor:'#004AAD66'}} type="text" rows='4' cols='50' placeholder="Enter your queries"/>
                        </div>
                        <div className="col-12">
                            <button onClick={()=>con()} style={{paddingLeft:'10px',width:'100%',height:'55px',borderRadius:'10px',backgroundColor:'#004AAD',color:'white'}} type="submit">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactUs;

