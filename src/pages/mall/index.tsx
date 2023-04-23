import SlideUp from '@/components/SlideUp';
import { Editor } from '@tinymce/tinymce-react';
import { Button, DatePicker } from 'antd';
import { useRef, useState } from 'react';
import { useModel } from 'umi';
import Box from './box';
import {BoxRefI, SlideUpI} from './type'

const Page = () => {
  const editorConfig = {
    branding: false, // 去水印
    language: 'zh_CN',
    height: 500,
    menubar: false,
    plugins: [
      'a11ychecker',
      'advlist',
      'advcode',
      'advtable',
      'autolink',
      'checklist',
      'export',
      'lists',
      'link',
      'image',
      'charmap',
      'preview',
      'anchor',
      'searchreplace',
      'visualblocks',
      'powerpaste',
      'fullscreen',
      'formatpainter',
      'insertdatetime',
      'media',
      'table',
      'help',
      'wordcount',
    ],
    toolbar:
      'undo redo | casechange blocks | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlst checklist outdent indent | removeformat | a11ycheck code table help',
  };
  const [text, setText] = useState<string>('');
  const { add, minus, count } = useModel('counterModel', (model) => ({
    add: model.increment,
    minus: model.decrement,
    count: model.counter,
  }));

  const slideUpRef = useRef<SlideUpI>(null);
  const boxRef = useRef<BoxRefI>(null);

  return (
    <>
      <Box onRef={boxRef}></Box>

      <Button
        onClick={() => {
          boxRef.current?.setRed((x: boolean) => !x);
        }}
      >
        变红
      </Button>

      <div className="flex ">
        <div className="c-red bg-#ccc inline mr-12 text-size-20 pl-12 pr-12 lh-1em">
          {count}
        </div>
        <button type="button" onClick={add}>
          add by 1
        </button>
        <button type="button" onClick={minus}>
          minus by 1
        </button>
      </div>
      <DatePicker />
      <div>
        <Editor
          id="tinymce-wrap"
          value={text}
          onEditorChange={(val) => setText(val)}
          apiKey="no-api-key"
          init={editorConfig}
          tinymceScriptSrc="./lib/tinymce/tinymce.min.js"
          initialValue="Welcome to TinyMCE Vue"
        />
      </div>

      <SlideUp
        ref={slideUpRef}
        header={
          <h2
            onClick={() => {
              console.log('slideUpRef', slideUpRef.current?.el);
              slideUpRef.current?.seeHi('hhh');
            }}
          >
            这是一个弹出组件
          </h2>
        }
      >
        <p>点击“关闭”按钮或按下 ESC 键即可关闭组件。</p>
      </SlideUp>
    </>
  );
};

export default Page;
