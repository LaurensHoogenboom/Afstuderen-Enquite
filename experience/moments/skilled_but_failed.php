<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>
                    
<div class="description">
    <h1>Minder succesvolle momenten</h1>
    <p>
        Tenslotte nog de momenten waarin je wist dat je de uitdaging aankon, maar je er toch niet zeker over voelde, en niet slaagde.
    </p>
</div>

<div class="content">
    <label class="form-status hidden"></label>

    <div class="moment-list" id="skilled_but_failed_list">
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
        <a class="button big" href="/experience/moments/not_skilled_but_succeeded.php" onclick="saveMoments('skilled_but_failed')">Vorige</a>
    </div>

    <div class="middle">
        
    </div>

    <div class="right">
        <a class="button big" href="/experience/moments/energy.php" onclick="return saveMoments('skilled_but_failed', 'true')">Volgende</a>
    </div>
</div>

<script>
    getMomentsInList('skilled_but_failed');
</script>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>
