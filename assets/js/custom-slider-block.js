// import { registerBlockType } from '@wordpress/blocks';
// import { useSelect } from '@wordpress/data';
// import { useBlockProps } from '@wordpress/block-editor';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { MediaUpload, RichText } = wp.blockEditor;
const { Button } = wp.components;

registerBlockType('custom-slider-block/slider', {
    title: __('Custom Slider Block'),
    icon: 'slides',
    category: 'common',
    attributes: {
        images: {
            type: 'array',
            default: [],
        },
        texts: {
            type: 'array',
            default: [],
        },
    },
    edit: (props) => {
        console.log('Script is running!');
        const { attributes, setAttributes } = props;
        const { images, texts } = attributes;

        const onAddImage = (index, newImage) => {
            const newImages = [...images];
            newImages[index] = newImage.url;
            setAttributes({ images: newImages });
        };

        const onChangeText = (index, newText) => {
            const newTexts = [...texts];
            newTexts[index] = newText;
            setAttributes({ texts: newTexts });
        };

        return (
            <div className="custom-slider-block">
                <div className="slider">
                    {images.map((image, index) => (
                        <div key={index} className="slide">
                            <MediaUpload
                                onSelect={(newImage) => onAddImage(index, newImage)}
                                type="image"
                                value={image}
                                render={({ open }) => (
                                    <Button onClick={open}>
                                        {image ? <img src={image} alt={`Slider Image ${index}`} /> : __('Select Image')}
                                    </Button>
                                )}
                            />
                            <RichText
                                tagName="div"
                                value={texts[index]}
                                onChange={(newText) => onChangeText(index, newText)}
                                placeholder={__('Enter text here...')}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    },
    save: () => {
        // The save function is not necessary in this case, as the rendering is done server-side.
        // The block content will be saved and rendered by the PHP function render_slider_block().
        // return render_slider_block();
        return null;
    },
});
