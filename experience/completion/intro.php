<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>

<div class="description">
    <h1>Laat eens kijken... 👀</h1>
    <p>
        We hebben nu een lijst met momenten. Deze moeten we verder uitdiepen, zodat we kunnen bepalen, waarom iets wel of niet lukte.
    </p>
    <p>
        <i>
            Toch nog niet helemaal zeker over de lijst? Je kan deze nog <a href="/experience/moments/skilled_and_succeeded.php">aanpassen</a>.
        </i>
    </p>
</div>

<div class="content">
    <script>
        createCompleteMomentList();
    </script>
</div>

<div class="actions">
    <div class="left">
    </div>

    <div class="middle">
        <a class="button big" onclick="startExperienceCompletion()" href="/experience/completion/add_details.php">Start</a>
    </div>

    <div class="right">
    </div>
</div>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>
      
