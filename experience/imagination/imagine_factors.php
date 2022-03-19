<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>

<div class="description">
    <h1>Stel je voor dat...</h1>
    <p>
        Invloeden kunnen twee kanten opwerken. Ze kunnen ervoor zorgen dat je, ongeacht je vaardigheden, onzeker bent
        overde situatie, of juist zekerder.
    </p>
</div>

<div class="content">
    <form class="item-form">
        <div class="item">
            <h2>Moment <span id="experience-index"></span> van <span id="experience-count"></span></h2>

            <label class="form-status hidden"></label>

            <label>In dit moment...</label>
            <label id="experience-description" class="block"></label>

            <label>...en ik hierdoor werdt beïnvloed:</label>
            <label id="experience-factor" class="block"></label>

            <label>...zdoat ik dit dacht:</label>
            <label id="experience-thought" class="block"></label>

            <label>...en me zo voelde:</label>
            <label id="experience-feeling" class="block"></label>

            <label>...en dit deed:</label>
            <label id="experience-action" class="block"></label>

            <label class="influence-input-label">...had anders kunnen verlopen als ik: *</label>

            <select id="factor-type">
                <option value="experience">...een eerdere ervaring had gehad met een vergelijkbare situatie.</option>
                <option value="feedback">...iemand iets had gezegd, namelijk...</option>
                <option value="mirror">...ik wist dat iemand anders het gelukt was.</option>
                <option value="imagination">...ik me had voorgesteld hoe het zou kunnen lukken.</option>
                <option value="physical">...ik helemaal fit was geweest</option>
                <option value="mental">...ik was al druk in mijn hoofd.</option>
                <option value="custom">...anders, namelijk...</option>
            </select>

            <textarea id="factor-description" class="influence-textarea" placeholder="licht eventueel toe"></textarea>
        </div>

        <label>* verplicht veld</label>
    </form>
</div>

<div class="actions">
    <div class="left">
        <a class="button big" href="/experience/factors/select_factors.php" for="submit_experience_form" onclick="return previousExperience(saveImagination, loadCurrentImagination)">Vorige</a>
    </div>

    <div class="middle">

    </div>

    <div class="right">
        <a class="button big" href="/experience/imagination/" for="submit_experience_form" onclick="return nextExperience(saveImagination, loadCurrentImagination)">Volgende</a>
    </div>
</div>

<script>
    loadCurrentImagination();
</script>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>