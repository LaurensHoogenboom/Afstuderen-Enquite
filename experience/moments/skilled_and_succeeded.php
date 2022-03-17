<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>
                    
<div class="description">
    <h1>Succesvolle momenten</h1>
    <p>
        Allereerst is het goed om te kijken naar momenten, waarin je wist dat je de uitdaging aankon, en ook daadwerkelijk slaagde in wat je moest doen.
    </p>
</div>

<div class="content">
    <label class="form-status hidden"></label>

    <div class="moment-list" id="skilled_and_succeeded_list">
        <div class="list">
            <div class="moment">
                <Textarea placeholder="Beschrijf het moment"></Textarea>
                <button class="button remove">X</button>
            </div>
        </div>

        <button class="button" id="add-moment">Toevoegen</button>
    </div>
</div>

<div class="actions">
    <div class="left">
        <a class="button big" href="/experience/" onclick="saveMoments('skilled_and_succeeded')">Vorige</a>
    </div>

    <div class="middle">
        
    </div>

    <div class="right">
        <a class="button big" href="/experience/moments/not_skilled_but_succeeded.php" onclick="return saveMoments('skilled_and_succeeded', 'true')">Volgende</a>
    </div>
</div>

<script>
    getMomentsInList('skilled_and_succeeded');
</script>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>
