import Document,{Html,Head,Main,NextScript} from "next/document"

export default class MyDocument extends Document {
    render(){
        return(
            <Html>
                <Head>
                    <title>Puzzle - P2P Арбитраж</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/> 
                    <meta charset="utf-8" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}