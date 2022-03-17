<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>
                    
<div class="description">
    <h1>Onverwacht succesvolle momenten</h1>
    <p>
        Allereerst zijn daar de momenten waarin je dacht dat je de uitdaging niet aankon, maar je uiteindelijk <i>wel</i> slaagde.
    </p>
</div>

<div class="content">
    <label class="form-status hidden"></label>

    <div class="moment-list" id="not_skilled_but_succeeded_list">
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
        <a class="button big" href="/experience/moments/skilled_and_succeeded.php" onclick="saveMoments('not_skilled_but_succeeded')">Vorige</a>
    </div>

    <div class="middle">
        
    </div>

    <div class="right">
        <a class="button big" href="/experience/moments/skilled_but_failed.php" onclick="return saveMoments('not_skilled_but_succeeded', 'true')">Volgende</a>
    </div>
</div>

<script>
    getMomentsInList('not_skilled_but_succeeded', $('#not-skilled_but_succeeded_list'));
</script>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>
