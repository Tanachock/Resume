import './App.css'
import myimg from './assets/photo.png'

function App() {

  return (
    <section>
      <div className='container'>
        <div className='container-left'>
          <div className='Profile'>
            <div className='img-box'>
              <img src={myimg}></img>
            </div>
          </div>
          <div className='name-lastname-576'>
            <div className='name-lastname-box-576'>
              <p>Tanachock Saelo</p>
            </div>
          </div>
          <div className='aboutme-576'>
            <div className='aboutme-box'>
                <p className='title'>A B O U T&nbsp;&nbsp; M E</p>
                <div className='text-detail'>
                  <p>I am a computer science student at Silpakorn University I am actively seeking a co-op education opportunity that will enable me to gain valuable experience and further enhance my skills.</p>
                </div>
            </div>
          </div>
          <div className='contact'>
            <div className='contact-box'>
              <p className='title'>C O N T A C T</p>
              <div className='contact-detail'>
                <p><i className="fa fa-phone" aria-hidden="true"></i>&nbsp;095-480-8507</p>
                <p><i className="fa fa-envelope-o" aria-hidden="true"></i>sae_t@silpakorn.edu</p>
                <p><i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp;109/387 Bangkok 10150</p>
                <p><i className="fa fa-github"></i>&nbsp;github.com/Tanachock</p>
              </div>
            </div>
          </div>
          <div className='edu'>
            <div className='edu-box'>
              <p className='title'>E D U C A T I O N</p>
              <p className='class-name'>Bachelor of Computer Science</p>
              <div className='university'>
                <i className="fa fa-circle" aria-hidden="true"></i>
                <div className='class-text-detaail'>
                  <p>Silpakorn</p>
                  <p>2021-2025</p>
                  <p>GPA 2.86</p>
                </div>
              </div>
              <p className='class-name'>High School</p>
              <div className='high-school'>
                <i className="fa fa-circle" aria-hidden="true"></i>
                <div className='class-text-detaail'>
                  <div className='school'>
                    <p>Rattanakosin Somphot Bang Khun Thian School</p>
                  </div>
                  <p>2018-2021</p>
                  <p>GPA 3.28</p>
                </div>
              </div>
            </div>
          </div>
          <div className='skill'>
            <div className='skill-box'>
              <p className='title'>S K I L L S</p>
              <div className='text-skill'>
                <p>&#x2022; C</p>
                <p>&#x2022; Java</p>
                <p>&#x2022; Python</p>
                <p>&#x2022; HTML</p>
                <p>&#x2022; CSS</p>
                <p>&#x2022; JavaScript</p>
                <p>&#x2022; My SQL</p>
              </div>
            </div>
          </div>
        </div>
        <div className='container-right'>
          <div className='name-lastname'>
            <div className='name-lastname-box'>
              <p>Tanachock Saelo</p>
            </div>
          </div>
          <div className='aboutme'>
            <div className='aboutme-box'>
                <p className='title'>A B O U T&nbsp;&nbsp;M E</p>
                <div className='text-detail'>
                  <p>I am a computer science student at Silpakorn University I am actively seeking a co-op education opportunity that will enable me to gain valuable experience and further enhance my skills.</p>
                </div>
            </div>
          </div>
          <div className='term-project'>
            <div className='term-project-box'>
              <p className='title'>T E R M&nbsp;&nbsp;&nbsp;P R O J E C T S</p>
              <div className='project'>
                <div className='title-project'>
                  <p>Text Classification</p>
                  <p>Natural Language Processing  2024</p>
                </div>
                <div className='text-project'>
                  <p>In topic of Fake news using DNN to classify fake news by have a embedding layer such as CNN,Flatten,Maxpool1D layer</p>
                </div>
              </div>
              <div className='project'>
                <div className='title-project'>
                  <p>Stroke Prediction</p>
                  <p>Maching Learning 2023</p>
                </div>
                <div className='text-project'>
                  <p>Utilize machine learning models such as Random Forest, and Logistic Regression to train datasets, addressing the issue of class imbalance by incorporating SMOTE (Synthetic Minority Over-sampling Technique). The objective is to achieve a high F1-score, and the machine learning project should strive for a performance level of 96.8%.</p>
                </div>
              </div>
              <div className='project'>
                <div className='title-project'>
                  <p>Database Design and Web Development</p>
                  <p>Database 2022</p>
                </div>
                <div className='text-project'>
                  <p>A MySQL database design for Website Business came along with a prototype</p>
                </div>
              </div>
            </div>
          </div>
          <div className='languages'>
            <p className='title'>L A N G U A G E S</p>
            <div className='lan-box'>
              <p>Thai</p>
              <p>English (average)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
