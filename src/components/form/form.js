import './form.scss'
import { FormPage} from './const'

function Form (){
return(
<>
<div className="form"> 
<div className="container">
{FormPage.map((item) => {
                                return(
                               <>
                              <h2 className="form__title">{item.title}</h2>
                              <p className="form__text">{item.text}</p>
                               <div className="row">
                                 <div className="col-6">
                                  <p className="form__data">{item.address}</p>
                                  <div className="form__map row">
                                    <span className="form__view">View map</span>
                                    <svg className="form__svg" width="84" height="38" viewBox="0 0 84 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M82.7678 20.7678C83.7441 19.7915 83.7441 18.2085 82.7678 17.2322L66.8579 1.32233C65.8816 0.34602 64.2986 0.34602 63.3223 1.32233C62.346 2.29864 62.346 3.88155 63.3223 4.85786L77.4645 19L63.3223 33.1421C62.346 34.1184 62.346 35.7014 63.3223 36.6777C64.2986 37.654 65.8816 37.654 66.8579 36.6777L82.7678 20.7678ZM0 21.5H81V16.5H0V21.5Z" fill="#14274A"/>
                                    </svg>
                                  </div>
                                  <p className="form__data">{item.phone}</p>
                                  <a className="form__data">{item.email}</a>
                                 </div>
                                    <div className="col-6 form__content">
                                        <form action="" className="form__forma" >
                                        <label for="fname" className="form__label">Name </label>
                                        <input  type="text" className="form__input"></input>
                                        <label for="fname" className="form__label">Email Address </label>
                                        <input  type="text" className="form__input"  ></input>
                                        <label for="message" className="form__label">Message</label>
                                        <textarea   name="message" className="form__textarea"></textarea>
                                        </form>
                                        <button className="form__btn">Submit</button>
                                    </div>
                               </div>

                                )
                            })}

</div>
</div>                  
</>
)
}
export default Form
