<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>
                    
<div class="description">
    <h1>Momenten die energie gaven.</h1>
    <p>
        Allereerst zijn daar de momenten die je leuk vond. Je vond het fijne momenten of je had een hoop lol. 
        Welke momenten waren dat?
    </p>
</div>

<div class="content">
    <div class="moment-list" id="joy-moment-list">
        <div class="list">
            <div class="moment">
                <Textarea></Textarea>
                <button class="button remove">X</button>
            </div>
        </div>

        <button class="button" id="add-moment"> toevoegen</button>
    </div>
</div>

<div class="actions">
    <div class="left">
        <a class="button big" href="/moments/actions/joy.php">Vorige</a>
    </div>

    <div class="middle">
        
    </div>

    <div class="right">
        <a class="button big" href="/moments/actions/energy.php" id="joy-save">Volgende</a>
    </div>
</div>

<script>
    getMomentsInList('joy', $('#joy-moment-list'));
</script>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>
