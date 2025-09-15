<script>
  const strafen = [
    { vergehen: "Zu spät zum Training", strafe: "5€", beschreibung: "Mehr als 10 Minuten Verspätung"},
    { vergehen: "Zu spät zum Match", strafe: "10€", beschreibung: "Verspätung bei Punktspielen"},
    { vergehen: "Unentschuldigtes Fehlen Training", strafe: "15€", beschreibung: "Ohne Abmeldung nicht erschienen"},
    { vergehen: "Unentschuldigtes Fehlen Match", strafe: "25€", beschreibung: "Ohne Abmeldung bei Punktspiel gefehlt"},
    { vergehen: "Schläger werfen", strafe: "20€", beschreibung: "Unsportliches Verhalten auf dem Platz"},
    { vergehen: "Fluchen/Schimpfen", strafe: "10€", beschreibung: "Unangemessene Sprache während des Spiels"},
    { vergehen: "Handy im Training", strafe: "3€", beschreibung: "Handynutzung während der Trainingszeit"},
    { vergehen: "Vergessene Tennisbälle", strafe: "5€", beschreibung: "Bälle für Training nicht mitgebracht"},
    { vergehen: "Platz nicht aufgeräumt", strafe: "8€", beschreibung: "Platz nach Training/Match nicht ordentlich hinterlassen"},
    { vergehen: "Dress-Code Verstoß", strafe: "12€", beschreibung: "Nicht angemessene Tenniskleidung"}
  ];

  let selectedStrafe = null;

  function showDetails(strafe) {
    selectedStrafe = selectedStrafe === strafe ? null : strafe;
  }
</script>

<main class="container">
  <header>
    <h1>🎾 Strafenkatalog</h1>
    <h2>HC Wacker Damen III</h2>
  </header>

  <div class="strafen-liste">
    {#each strafen as strafe}
      <div class="strafe-item" class:active={selectedStrafe === strafe}>
        <div class="strafe-header" on:click={() => showDetails(strafe)}>
          <span class="vergehen">{strafe.vergehen}</span>
          <span class="betrag">{strafe.strafe}</span>
          <span class="arrow">{selectedStrafe === strafe ? '▼' : '▶'}</span>
        </div>
        {#if selectedStrafe === strafe}
          <div class="strafe-details">
            <p>{strafe.beschreibung}</p>
          </div>
        {/if}
      </div>
    {/each}
  </div>

  <footer>
    <p>💡 <strong>Hinweis:</strong> Alle Strafen fließen in die Mannschaftskasse für gemeinsame Aktivitäten!</p>
  </footer>
</main>

<style>
  .container {
    margin: 0 auto;
    padding: 20px;
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #000099 0%, #2e589e 50%, #ffffff 100%);
    min-height: 100vh;
    color: white;
  }

  header {
    text-align: center;
    margin-bottom: 30px;
  }

  h1 {
    font-size: 2.5em;
    margin: 0;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  }

  h2 {
    font-size: 1.3em;
    margin: 10px 0;
    opacity: 0.9;
    font-weight: normal;
  }

  .strafen-liste {
    max-width: 600px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 20px;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  }

  .strafe-item {
    margin-bottom: 10px;
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.1);
  }

  .strafe-item:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  .strafe-item.active {
    background: rgba(255, 255, 255, 0.2);
  }

  .strafe-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    cursor: pointer;
    user-select: none;
  }

  .strafe-details {
    padding: 15px 20px;
  }

  .vergehen {
    flex: 1;
    font-weight: 600;
    font-size: 1.1em;
  }

  footer {
    max-width: 600px;
    margin: 0 auto;
    margin-top: 40px;
  }
</style>