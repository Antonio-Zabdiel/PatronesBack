import bodyParser from "body-parser";
import cors from 'cors';
var app = express();
//get PORT from the server
//obtener el PUERTO del server donde hosteamos
const PORT = process.env.PORT;

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
})); 

//global
//que si no da error
const corsConfig = {
    credentials: true,
    origin: true,
};
app.use(cors(corsConfig));
//end of global
//test
app.get("/", async (req, res, next) => {
    res.json({
        msg:"welcome >:3"
    });
});

//run this sheet
//que se ejecute la cosa esta
app.listen(PORT, () => {
    console.log(Server listening on ${PORT});
});
