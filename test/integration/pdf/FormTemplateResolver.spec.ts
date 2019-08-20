import {expect} from "chai";
import {applicationContext} from "../setup-test";
import TYPE from "../../../src/constant/TYPE";
import {FormTemplateResolver} from "../../../src/pdf/FormTemplateResolver";
import {basicForm} from "../../form";

describe('FormTemplateResolver', () => {
    const formTemplateResolver: FormTemplateResolver = applicationContext.get(TYPE.FormTemplateResolver);

    it('can generate html', async () => {
        const result = await formTemplateResolver.renderContentAsHtml(basicForm, {
            data: {
                "textField": "This is a test of data"
            }
        });
        console.log(result);
        expect(result).to.be.not.null;
    });
});
