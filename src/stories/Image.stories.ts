import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { ImageComponent } from '../app/image/image.component';

export default {
    title: 'Example/Image Stories',
    component: ImageComponent,
} as Meta;

const Template: Story<ImageComponent> = (args: ImageComponent) => ({
    component: ImageComponent,
    props: args,
});


export const WithImageCaption = Template.bind({});
WithImageCaption.args = {
    figCaptionTxt: 'vous devez écrire quelque chose içi'
};


export const WithFullOpacity = Template.bind({});
WithFullOpacity.args = {
    imgOpacity: 1
};
