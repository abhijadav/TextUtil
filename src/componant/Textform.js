import React,{useState} from 'react';

export default function Textform(props) {

    const [text,setText] = useState("");

    const toupper = () =>{
        // console.log("uppercase btn is clicked")
        const newtext = text.toUpperCase();
        setText(newtext);
        props.showalert(' : Text converted to UpperCase!','success');
    }

    const tolower = () =>{
        // console.log("lowercase btn is clicked")
        const newtext = text.toLowerCase();
        setText(newtext);
        props.showalert(' : Text converted to LowerCase!','success');
    }

    const extraspace = () =>{
        // const newtext = text.replace(/\s+/g,' ').trim();
        const newtext = text.replace(/[^\S\r\n]+/g, ' ').trim();

        setText(newtext);
        props.showalert(' : Extra spaces removed from Text!','success');
    }

    const cleartext = () =>{
        setText('');
        props.showalert(' : Text cleared!','success');
    }

    const capitalize = () => {
        // Split the text into lines
        const lines = text.split(/\n/);
        
        // Capitalize each line
        for (let i = 0; i < lines.length; i++) {
            // Split the line into words
            const words = lines[i].split(" ");
            
            // Capitalize the first letter of each word
            for (let j = 0; j < words.length; j++) {
                words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1);
            }
            
            // Join the words back into a line
            lines[i] = words.join(" ");
        }
    
        // Join the lines back into text
        setText(lines.join("\n"));
        props.showalert(' : Text capitalized!','success');
    }

    const altercase = ()=>{
        // Split the sentence into words
        let words = text.split(" ");
    
        // Loop through each word
        for (let i = 0; i < words.length; i++) {
        // Toggle the case of each letter in the word
        let toggledWord = "";
        for (let j = 0; j < words[i].length; j++) {
            // Check if current letter is uppercase
            if (words[i][j] === words[i][j].toUpperCase()) {
                // Convert uppercase to lowercase
                toggledWord += words[i][j].toLowerCase();
            } 
            else {
                // Convert lowercase to uppercase
                toggledWord += words[i][j].toUpperCase();
            }
        }
        // Replace the original word with the toggled case word
        words[i] = toggledWord;
        }
    
        // Join the words back into a sentence
        setText(words.join(" "));
        props.showalert(' : Text cases altered!','success');
    }

    const downloadTextFile =(text, filename)=> {
        var text1 = document.getElementById('mybox').value;
        if (typeof text1 !== 'string') {
            text1 = String(text1);
        }
        var pom = document.createElement('a');
        pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text1));
        pom.setAttribute('download', 'Text.txt');
        pom.click();
        setText('');
        props.showalert(' : Text downloaded!','success');
    }
    

    const copy = () =>{
        // let copiedtext = document.getElementById("mybox");
        // copiedtext.select();
        // document.execCommand("copy");
        // document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text);
        props.showalert(' : Text copied to clipboard!','success');
        // console.log(copiedtext.value);
    }

    const customSplit= (text)=>{
        // Remove trailing spaces
        let text1 = text.trim();
        
        // Split the text by spaces
        let words = text1.split(/\s+/).filter((element)=>{return element.length !== 0});
    
        // Return the array length
        return words.length;
    }
    
    const handleonchange = (event) => {
        // console.log("on change")
        setText(event.target.value)
    }

    const btncolor = (mode) =>{
        if(mode==='dark' || mode==='success' || mode==='danger' || mode==='primary' || mode==='warning')
        {
            return 'light';
        }
        else{
            return 'dark';
        }
    }

    const color = (mode) => {
        if(mode==='danger' || mode==='dark' || mode==='success' || mode==='primary' || mode==='warning'){
            const color = {
                color : 'white',
            }
            return color;
        }
        else{
            const color = {
                color : '#000',
            }
            return color;
        }
    };

    const bgcolor = (mode) => {
        if(mode==='dark'){
            const bgcolor = {
                backgroundColor : '#646161',
                color : 'white',
            }
            return bgcolor;
        }
        else if(mode==='danger'){
            const bgcolor = {
                backgroundColor : '#f54327',
                color : 'white',
            }
            return bgcolor;
        }
        else if(mode==='success'){
            const bgcolor = {
                backgroundColor : '#48b548',
                color : 'white',
            }
            return bgcolor;
        }
        else if(mode==='primary'){
            const bgcolor = {
                backgroundColor : '#5c67db',
                color : 'white',
            }
            return bgcolor;
        }
        else if(mode==='warning'){
            const bgcolor = {
                backgroundColor : '#ffd503',
                color : 'white',
            }
            return bgcolor;
        }
        else{
            const bgcolor = {
                backgroundColorolor : 'white',
                color : 'black',
            }
            return bgcolor;
        }
    };

  return (  
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
                {/* <div className="mb-3"> */}
                    <h1 style={color(props.mode)}>{props.title}</h1>
                    <textarea className="form-control" value={text} style={bgcolor(props.mode)} onChange={handleonchange} id="mybox" rows="8"></textarea>
                    <button disabled={text.length === 0} className={`btn btn-${btncolor(props.mode)} my-2 mx-2`} onClick={cleartext}>Clear Text</button>
                    <button disabled={text.length === 0} className={`btn btn-${btncolor(props.mode)} my-2 mx-2`} onClick={toupper}>UPPER CASE</button>
                    <button disabled={text.length === 0} className={`btn btn-${btncolor(props.mode)} my-2 mx-2`} onClick={tolower}>lower case</button>
                    <button disabled={text.length === 0} className={`btn btn-${btncolor(props.mode)} my-2 mx-2`} onClick={extraspace}>Remove Extra Space</button>
                    <button disabled={text.length === 0} className={`btn btn-${btncolor(props.mode)} my-2 mx-2`} onClick={copy}>Copy Text</button>
                    <button disabled={text.length === 0} className={`btn btn-${btncolor(props.mode)} my-2 mx-2`} onClick={capitalize}>Capitalized Case</button>
                    <button disabled={text.length === 0} className={`btn btn-${btncolor(props.mode)} my-2 mx-2`} onClick={altercase}>aLteR cASe</button>
                    <button disabled={text.length === 0} className={`btn btn-${btncolor(props.mode)} my-2 mx-2`} onClick={downloadTextFile}>Download Text</button>
                    
                {/* </div> */}
                
                <div className="container" style={color(props.mode)}>
                <h2>Your Text Summary</h2>
                <p>{customSplit(text)} words and {text.split("").length} characters</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:'Nothing to Preview!'}</p>
                </div>
            </div>
        </>
    )
}
