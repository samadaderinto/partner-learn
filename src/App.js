import {React, useEffect, useState} from 'react'
import apiaudio from 'apiaudio'
import  "./App.css"



const App = ()=> {
  const [check, setCheck] = useState(0)
    
  
  const [formData, setFormData] = useState({
    text: "",
    speaker: "",
    template: ""
  })

  const handleChange = (e)=> {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData)
  };
  
  const speaker = ["ryan", "libby", "aria", "guy", "david", "elvira","matthias", "ingrid", "pauline", "henri", "alena", "dmitry"]
  const speakers = speaker.map(element => {
    return (
    <option key = {element} value={element}>{element.toUpperCase()}</option>)})
  const template = ["copacabana", "breakingnews", "hautecuisine", "openup", "curtaincall", "fairytale", "hotwheels"]
  const templates = template.map(element => {
    return (
    <option key={element} value={element}>{element.toUpperCase()}</option>)})
  
    async function helloWorld() {
      if (check ===0) {
        apiaudio.configure({ apiKey: "1bbba608c42f4c1388e3a2144a2d9720" });
        return
      }
      
      try {
        const script = await apiaudio.Script.create({ scriptText: `
       SOUNDSEGMENT::INTRO
       SECTIONNAME::INTRO 
       Hello world. Welcome to API dot audio.
       SOUNDSEGMENT::MAIN
       SECTIONNAME::MAIN
       ${formData.text} <break time = '1s'/>
       SOUNDSEGMENT::OUTRO 
       SECTIONNAME::OUTRO
       We're excited to hear your script!
       `, scriptName: "hello", projectName: "hello", moduleName: "hello" });
        console.log(script);
    
        const speech = await apiaudio.Speech.create({ scriptId: script["scriptId"], voice: `${formData.speaker}` });
        console.log(speech); 
    
        const template = `${formData.template}`;
        const mastering = await apiaudio.Mastering.create({ scriptId: script["scriptId"], soundTemplate: template });
        console.log(mastering);
        
      } catch (e) {
        console.error(e);
      }
    }

    useEffect((helloWorld()), [check])
  
  
  return (
    <div className = "all">
      <h1>BUILD AUDIO IN SECONDS</h1>
      <div className="text">
        <span>Type Anything and choose your speaker</span>
        <input type="text" name="text" placeholder="kindly enter your text here"  value={formData.text} onChange={handleChange}/>
      </div>
      <div className="chs-template">
        <select name="speaker" value={formData.speaker} onChange={handleChange}>
          {speakers}
        </select>
      </div>
      <div className="chs-template">
        <span>Choose a template and create your audio</span>
        <select name="template"  value={formData.template} onChange={handleChange}>
          {templates}
        </select>
      </div>
      <button>Generate Audio</button>
            
      <audio  src="./static/music/foo.mp3" controls autoPlay/>
    </div>

  )
}

export default App;
