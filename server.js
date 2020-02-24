const express = require("express");
const app = express();
const logger = require("morgan");
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/deploy_todoDB";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log("connected to db instance"))
  .catch(err => console.log(err));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger("dev"));

const apiRoutes = require("./routes/api-routes");
app.use("/", apiRoutes);

app.listen(PORT, () => {
  console.log(`listening at: http://localhost:${PORT}`);
});

/*


  ,----..                             ,-.   ,----..                           ___
 /   /   \                        ,--/ /|  /   /   \                        ,--.'|_             ,--,
|   :     :                     ,--. :/ | |   :     :               ,---,   |  | :,'   __  ,-.,--.'|
.   |  ;. /                     :  : ' /  .   |  ;. /           ,-+-. /  |  :  : ' : ,' ,'/ /||  |,
.   ; /--`     ,---.     ,---.  |  '  /   .   ; /--`    ,---.  ,--.'|'   |.;__,'  /  '  | |' |`--'_       ,---.
;   | ;  __   /     \   /     \ '  |  :   ;   | ;      /     \|   |  ,"' ||  |   |   |  |   ,',' ,'|     /     \
|   : |.' .' /    /  | /    /  ||  |   \  |   : |     /    /  |   | /  | |:__,'| :   '  :  /  '  | |    /    / '
.   | '_.' :.    ' / |.    ' / |'  : |. \ .   | '___ .    ' / |   | |  | |  '  : |__ |  | '   |  | :   .    ' /
'   ; : \  |'   ;   /|'   ;   /||  | ' \ \'   ; : .'|'   ;   /|   | |  |/   |  | '.'|;  : |   '  : |__ '   ; :__
'   | '/  .''   |  / |'   |  / |'  : |--' '   | '/  :'   |  / |   | |--'    ;  :    ;|  , ;   |  | '.'|'   | '.'|
|   :    /  |   :    ||   :    |;  |,'    |   :    / |   :    |   |/        |  ,   /  ---'    ;  :    ;|   :    :
 \   \ .'    \   \  /  \   \  / '--'       \   \ .'   \   \  /'---'          ---`-'           |  ,   /  \   \  /
  `---`       `----'    `----'              `---`      `----'                                  ---`-'    `----'

*/
