function PersonalInfo({name, email, tel}) {
  return (
      <div className="personal-info">
        <h2>Informações Pessoais</h2>
            <p>Nome: {name}</p>
            <p>Email: {email}</p>
            <p>Telefone: {tel}</p>
      </div>
  );
}

export default PersonalInfo;
