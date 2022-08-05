import './App.scss';
import React,{ useEffect } from 'react';
import Form from './components/Form/form';
import Header from './components/Header/header';
import Results from './components/Results/results';
import apiaudio from 'apiaudio'
import KEY_API_AUDIO from './key';

function App() {


    const runScript = async() => {
        apiaudio.configure({apiKey: KEY_API_AUDIO});

        try {

            const createScript = await apiaudio
                .script
                .create({scriptText: "samad", scriptId: "samad", projectName: "text2speech", moduleName: "samad", scriptName: "samad"});

            const createSpeech = await apiaudio
                .Speech
                .create({scriptId: "samad", voice: "Sonia", speed: 100});

            const createAudio = await apiaudio
                .mastering
                .create({scriptId: "samad", soundTemplate: "qq"});


        } catch (error) {
            alert(error)
        }
    }

    useEffect(runScript(),[])
    return (
        <div className="App">
            <Header/>
            <main className='App-main'>
                <Form/>
                <Results/>
            </main>

        </div>
    );
}

export default App;
