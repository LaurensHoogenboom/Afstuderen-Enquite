<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>
               
<div class="description">
    <h1>Bijna klaar.</h1>
    <p>
        Bedankt dat je deze test wilde maken! Je helpt me hiermee verder met mijn onderzoek.
    </p>
    <p>
        Mocht je nog vragen of opmerkingen hebben over deze test, dan kan je ze hieronder achterlaten.
    </p>
</div>

<div class="content">
    <form>
        <textarea id="feedback"></textarea>
    </form>
</div>

<div class="actions">
    <div class="left">
        
    </div>

    <div class="middle">
        <a class="button big" onclick="saveResult()">Verzenden</a>
    </div>

    <div class="right">
        
    </div>
</div>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>
