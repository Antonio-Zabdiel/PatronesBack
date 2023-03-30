var app = express();
//get PORT from the server
//obtener el PUERTO del server donde hosteamos
const PORT = process.env.PORT;

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
