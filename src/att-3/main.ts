import { Cachorro } from "./Carrocho";
import { Cavalo } from "./Cavalo";
import { Gato } from "./Gato";

const cachorro = new Cachorro("Rex", 4);
cachorro.emitirSom();
cachorro.mover();
cachorro.abanarRabo();

const cavalo = new Cavalo("Trovão", 7);
cavalo.emitirSom();
cavalo.mover();
cavalo.galopar();

const gato = new Gato("Mimi", 3);
gato.emitirSom();
gato.mover();
gato.arranhar();
