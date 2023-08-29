import './index.scss'
import AnimatedLetters from '../AnimatedLetters';

const About = () => {
  return (
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
          strArray={"About me".split("")}
          idx={15} />
        </h1>
        <p>Im Ryan ipsdkfnoasdknvlasidbvclqidwv
          asldivhbasdhbvaksdjhbvkajdv
          ajsdhbjasdhbv
        </p>
        <p>jkdshfbvkashjdbfvas
          aksdhbvkasdbvc
          askjdhbv
        </p>
      </div>
    </div>
  )
}

export default About