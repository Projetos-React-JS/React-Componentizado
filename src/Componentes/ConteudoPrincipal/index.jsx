import ContactForm from "../ContactForm";
import PersonalInfo from "../PersonalInfo";
import Skills from "../Skills";

function ConteudoPrincipal(){
    return (
        <div className="mainInfo">
        <section id='info'>
            <PersonalInfo name="João" email="joao@example.com" tel="(00) 12345-6789"/>
            <Skills />
        </section>
        <ContactForm />
      </div>
    );
}

export default ConteudoPrincipal;