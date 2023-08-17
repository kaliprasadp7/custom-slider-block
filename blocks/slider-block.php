<?php
function render_slider_block($attributes) {
    // Fetch attributes

    $images = $attributes['images'] ?? array();
    $texts = $attributes['texts'] ?? array();

    ob_start();
    ?>
    <div class="custom-slider-block">
        <div class="slider">
            <?php foreach ($images as $index => $image): ?>
                <div class="slide">
                    <img src="<?php echo esc_url($image); ?>" alt="Slider Image <?php echo $index; ?>">
                    <div class="text">
                        <?php echo esc_html($texts[$index] ?? ''); ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
    <?php
    return ob_get_clean();
}
