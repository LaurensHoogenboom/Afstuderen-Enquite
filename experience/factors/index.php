<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>

<div class="description">
    <h1>Beïnvloed door...</h1>
    <p>
        Nu we hebben opgediept hoe je dacht, voelde of deed in het moment, kunnen we proberen
        te achterhalen waardoor iets onverwacht wel of niet lukte.
    </p>
    <p>
        <i>
            Toch nog niet helemaal zeker over de ervaringen? Je kan deze nog <a onclick="firstExperience()" href="/experience/completion/add_details.php">aanpassen</a>.
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
        <a class="button big" onclick="firstExperience()" href="/experience/factors/select_factors.php">Start</a>
    </div>

    <div class="right">
    </div>
</div>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>
      
