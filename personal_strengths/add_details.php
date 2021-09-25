<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>

<div class="description">
    <h1>Ik voel me goed/sterk als...</h1>
    <p>
        Alle ervaringen hebben we verwerkt in een zin. Het is nu aan jouw om ze goed lopend en kloppend te maken.
    </p>
</div>

<div class="content">
<form class="experience-completion-form" id="experience-completion-form">
        <div class="experience">
            <h2>Ervaring <span id="experience-index"></span> van <span id="experience-count"></span></h2>

            <p id="experience-description">moment beschrijving</p>

            <label class="form-status hidden"></label>

            <label>Wat was jouw rol in dit moment? *</label>
            <textarea id="experience-action" required></textarea>

            <label>Wat dacht je tijdens dit moment? *</label>
            <textarea id="experience-thought" required></textarea>

            <label>Hoe voelde je? *</label>
            <textarea id="experience-feeling" required></textarea>

            <label>Hoe eindigde het?</label>
            <textarea id="experience-ending"></textarea>
        </div>
        <label>* verplicht veld</label>
    </form>
</div>

<div class="actions">
    <div class="left">
    </div>

    <div class="middle">
        <a class="button">Start</a>
    </div>

    <div class="right">
    </div>
</div>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>