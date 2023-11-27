import { builder } from '@builder.io/sdk';
import { NextResponse } from 'next/server';
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || '');
export async function GET(req: any, res: any) {
  try {
    const workExperience = await builder.getAll('work-experience', {
      prerender: true,
    });
    return NextResponse.json({ workExperience });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
  return NextResponse.json({ success: false }, { status: 500 });
}
