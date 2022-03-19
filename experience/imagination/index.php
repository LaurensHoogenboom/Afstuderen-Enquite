<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>

<div class="description">
    <h1>Andersom... 🔁</h1>
    <p>
        Natuurlijk kunnen factoren twee kanten opwerken. Daarom gaan we tenslotte nog kijken naar
        hoe bepaalde invloeden, situatie anders hadden kunnen laten verlopen.
    </p>
    <p>
        <i>
            Toch nog niet helemaal zeker over de opgegeven invloeden? Je kan deze nog <a onclick="firstExperience()" href="/experience/factors/select_factors.php">aanpassen</a>.
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
        <a class="button big" onclick="firstExperience()" href="/experience/imagination/imagine_factors.php">Start</a>
    </div>

    <div class="right">
    </div>
</div>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>
      
