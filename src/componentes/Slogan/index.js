import "./Slogan.css";
import videoSlogan from "./imagens/videoSlogan.mp4";

const Slogan = () => {
  return (
    <section className="slogan">
      <video
        className="slogan-video"
        id="video-background"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoSlogan} type="video/mp4" />
        Seu navegador não tem suporte a vídeo
      </video>
      <div className="slogan-container-text">
        <p className="slogan-text">DA VIDA UM FILME</p>
      </div>
    </section>
  );
};

export default Slogan;
